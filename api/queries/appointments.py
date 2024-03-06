from .pool import pool
from pydantic import BaseModel
from typing import List, Union
from fastapi import HTTPException


class AppointmentOut(BaseModel):
    client_name: str
    phone_number: str
    appointment_type: str
    start_time: str
    end_time: str
    appointment_types_id: int

class AppointmentsOut(BaseModel):
    appointments: list[AppointmentOut]



class AppointmentRepo:
    def get_appointments(self):
        try:
            with pool.connection as conn:
                with conn.curr as db:
                    result = db.execute(
                        """
                        SELECT * FROM appointments;
                        """,
                    )
                    appointments = result.fetchall()
                    appointments_list = []
                    for a in appointments:
                        appointment = AppointmentOut(
                            client_name=a[0],
                            phone_number=a[1],
                            appointment_type=a[2],
                            start_time=a[3],
                            end_time=a[4],
                            appointment_types_id=a[5],
                        )
                        appointments_list.append(appointment)
                    return appointments_list
        except Exception as e:
            raise HTTPException(
                status_code=400,
                detail=str(e),
            )
