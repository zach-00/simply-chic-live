from datetime import datetime, timedelta
from .pool import pool
from pydantic import BaseModel
from typing import List, Union
from fastapi import HTTPException


class AppointmentOut(BaseModel):
    id: int
    client_name: str
    phone_number: str
    start_time: datetime
    end_time: datetime
    appointment_type_id: int
    type_name: str

class AppointmentsOut(BaseModel):
    appointments: list[AppointmentOut]

class AppointmentIn(BaseModel):
    client_name: str
    phone_number: str
    start_time: datetime
    appointment_type_id: int



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
                            at.type_name
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
                        )
                        appointments_list.append(appointment)
                    return appointments_list
        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )


    def create_appointment(self, appointment: AppointmentIn):
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
                            (client_name, phone_number, start_time, end_time, appointment_type_id)
                        VALUES
                            (%s, %s, %s, %s, %s)
                        RETURNING
                            id,
                            client_name,
                            phone_number,
                            start_time,
                            end_time,
                            appointment_type_id;
                        """,
                        [
                            appointment.client_name,
                            appointment.phone_number,
                            appointment.start_time,
                            end_time_str,
                            appointment.appointment_type_id,
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
                    )

        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )
