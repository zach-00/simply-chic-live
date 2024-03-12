from datetime import datetime, timedelta, time, date
from .pool import pool
from pydantic import BaseModel
from fastapi import HTTPException


class AppointmentOut(BaseModel):
    id: int
    client_name: str
    phone_number: str
    start_time: datetime
    end_time: datetime
    appointment_type_id: int
    type_name: str
    account_id: int

class AppointmentsOut(BaseModel):
    appointments: list[AppointmentOut]

class AppointmentIn(BaseModel):
    client_name: str
    phone_number: str
    start_time: datetime
    appointment_type_id: int

class AppointmentType(BaseModel):
    id: int
    type_name: str
    duration: time

class AppointmentTypes(BaseModel):
    appointment_types: list[AppointmentType]



class AppointmentRepo:
    def get_appointments(self):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT
                            a.id,
                            a.client_name,
                            a.phone_number,
                            a.start_time,
                            a.end_time,
                            a.appointment_type_id,
                            at.type_name,
                            a.account_id
                        FROM appointment_type AS at
                        INNER JOIN appointments AS a
                        ON at.id = a.appointment_type_id;
                        """,
                    )
                    appointments = result.fetchall()
                    appointments_list = []
                    for a in appointments:
                        appointment = AppointmentOut(
                            id=a[0],
                            client_name=a[1],
                            phone_number=a[2],
                            start_time=a[3],
                            end_time=a[4],
                            appointment_type_id=a[5],
                            type_name=a[6],
                            account_id=a[7],
                        )
                        appointments_list.append(appointment)
                    return appointments_list
        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )


    def get_available_appointments(self, date: date, appointment_type_id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT duration
                        FROM appointment_type
                        WHERE id = %s;
                        """,
                        [
                            appointment_type_id,
                        ]
                    )
                    duration = result.fetchone()[0]
                    print(duration)


            # Start by getting existing appointments in database
            search_date = f"{date}%"
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT a.id, a.start_time, a.end_time, at.duration
                        FROM appointments AS a
                        INNER JOIN appointment_type AS at
                        ON a.appointment_type_id = at.id
                        WHERE DATE(start_time) = %s;
                        """,
                        [
                            search_date,
                        ]
                    )
                    existing_appointments = result.fetchall()
                    print("EXISTING APPTS *****", existing_appointments)

                    all_times = [
                        "08:00:00",
                        "08:30:00",
                        "09:00:00",
                        "09:30:00",
                        "10:00:00",
                        "10:30:00",
                        "11:00:00",
                        "11:30:00",
                        "12:30:00",
                        "13:00:00",
                        "13:30:00",
                        "14:00:00",
                        "14:30:00",
                        ]

                    available_times = []

                    unsorted_times = {}
                    for t in existing_appointments:
                        unsorted_times.update({t[1].time(): t[2].time()})

                    sorted_times = sorted(unsorted_times.items(), key=lambda x:x[1])
                    times = dict(sorted_times)

                    for start, end in times.items():
                        for t in all_times:
                            time = datetime.strptime(t, "%H:%M:%S").time()
                            if time > end:
                                break
                            if time >= start and time < end:
                                continue
                            else:
                                if len(available_times) == 0:
                                    available_times.append(time)
                                elif time not in available_times and time > max(available_times):
                                    available_times.append(time)

                    for t in all_times:
                        time = datetime.strptime(t, "%H:%M:%S").time()
                        if time > max(times.values()):
                            available_times.append(time)

                    print(available_times)


                    ##### Need to compare the duration of the client's selected
                    ##### appointment type to the available time slots before
                    ##### returning the time slots that will work with their chosen appt type

                    for i in range(1, len(available_times)):
                        first_str = str(available_times[i-1])
                        second_str = str(available_times[i])

                        first_time = datetime.strptime(first_str, "%H:%M:%S")
                        second_time = datetime.strptime(second_str, "%H:%M:%S")

                        window = second_time - timedelta(hours=first_time.hour, minutes=first_time.minute, seconds=first_time.second)
                        window_str = window.strftime("%H:%M:%S")



                    return available_times


        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )


    def create_appointment(self, appointment: AppointmentIn, account_id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT duration, type_name
                        FROM appointment_type
                        WHERE id = %s;
                        """,
                        [
                            appointment.appointment_type_id
                        ],
                    )
                    response = result.fetchone()
                    type_name = response[1]

                    # Convert strings to datetime objects
                    interval = str(response[0])
                    appt_time = str(appointment.start_time)

                    duration = datetime.strptime(interval, "%H:%M:%S")
                    start_time = datetime.strptime(appt_time, "%Y-%m-%d %H:%M:%S")

                    # Add duration to start time
                    end_time = start_time + timedelta(hours=duration.hour, minutes=duration.minute, seconds=duration.second)

                    # Convert end time back to string
                    end_time_str = end_time.strftime("%Y-%m-%d %H:%M:%S")

            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO appointments
                            (client_name, phone_number, start_time, end_time, appointment_type_id, account_id)
                        VALUES
                            (%s, %s, %s, %s, %s, %s)
                        RETURNING
                            id,
                            client_name,
                            phone_number,
                            start_time,
                            end_time,
                            appointment_type_id,
                            account_id;
                        """,
                        [
                            appointment.client_name,
                            appointment.phone_number,
                            appointment.start_time,
                            end_time_str,
                            appointment.appointment_type_id,
                            account_id,
                        ],
                    )
                    response = result.fetchone()

                    return AppointmentOut(
                        id=response[0],
                        client_name=response[1],
                        phone_number=response[2],
                        start_time=response[3],
                        end_time=response[4],
                        appointment_type_id=response[5],
                        type_name=type_name,
                        account_id=account_id,
                    )

        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )


    def delete_appointment(self, appointment_id: int, account_id: int):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM appointments
                        WHERE id = %s
                        AND account_id = %s
                        RETURNING id;
                        """,
                        [
                            appointment_id,
                            account_id,
                        ],
                    )
                    if result.fetchone()[0]:
                        return True

        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )


    def get_appointment_type(self):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT * FROM appointment_type;
                        """
                    )
                    appointment_types = result.fetchall()
                    app_list = []
                    for app in appointment_types:
                        app_type = AppointmentType(
                            id=app[0],
                            type_name=app[1],
                            duration=app[2],
                        )
                        app_list.append(app_type)
                    return app_list

        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )





        # date = `%{date}%`

        # """
        # SELECT start_time, end_time
        # FROM appointments
        # WHERE start_time LIKE %s
        # AND end_time LIKE %s
        # """,
        # [
        #     date
        # ]
