from fastapi import APIRouter, Depends
from authenticator import User
import authenticator as authenticator
from queries.appointments import(
    AppointmentOut,
    AppointmentsOut,
    AppointmentRepo,
    AppointmentIn,
    AppointmentTypes,
)
from typing import Union, List


router = APIRouter()

@router.get("/appointments", response_model=AppointmentsOut)
def get_appointments(
    repo: AppointmentRepo = Depends(),
    ):
    return {"appointments": repo.get_appointments()}


@router.get("/appointments/type", response_model=AppointmentTypes)
def get_appointment_type(
    repo: AppointmentRepo = Depends(),
):
    return {"appointment_types": repo.get_appointment_type()}


@router.post("/appointments", response_model=AppointmentOut)
def create_appointment(
    appointment: AppointmentIn,
    repo: AppointmentRepo = Depends(),
    user: User = Depends(authenticator.get_current_active_user),
):
    return repo.create_appointment(appointment, user.id)


@router.delete("/appointments/{appointment_id}")
def delete_appointment(
    appointment_id: int,
    repo: AppointmentRepo = Depends(),
    user: User = Depends(authenticator.get_current_active_user),
):
    return repo.delete_appointment(appointment_id, user.id)
