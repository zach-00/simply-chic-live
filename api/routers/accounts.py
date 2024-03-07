from fastapi import Depends, APIRouter, HTTPException, status
from queries.accounts import AccountRepo, AccountOut, AccountsOut, AccountIn
from authenticator import authenticator, User


router = APIRouter()


@router.post("/accounts", response_model=AccountOut)
def create_account(
    account: AccountIn,
    repo: AccountRepo = Depends()
    ):
    hashed_pw = authenticator.get_password_hash(account.password)
    return repo.create_account(account, hashed_pw)


@router.get("/accounts", response_model=AccountsOut)
def get_accounts(repo: AccountRepo = Depends()):
    return {"accounts": repo.get_accounts()}


@router.get("/accounts/me", response_model=User)
async def read_users_me(current_user: User = Depends(authenticator.get_current_active_user)):
    return current_user
