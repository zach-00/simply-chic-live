from fastapi import APIRouter, Depends, Response
from queries.appointments import AppointmentOut, AppointmentsOut, AppointmentRepo
from typing import Union, List


router = APIRouter()

@router.get("/appointments", response_model=List[AppointmentsOut])
def get_appointments(
    repo: AppointmentRepo = Depends(),
    ):
    return {"appointments": repo.get_appointments()}
