from fastapi import APIRouter, Depends, Response
from queries.appointments import(
    AppointmentOut,
    AppointmentsOut,
    AppointmentRepo,
    AppointmentIn,
)
from typing import Union, List


router = APIRouter()

@router.get("/appointments", response_model=AppointmentsOut)
def get_appointments(
    repo: AppointmentRepo = Depends(),
    ):
    return {"appointments": repo.get_appointments()}


@router.post("/appointments", response_model=AppointmentOut)
def create_appointment(
    appointment: AppointmentIn,
    repo: AppointmentRepo = Depends(),
):
    return repo.create_appointment(appointment)
