from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import os
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from queries.accounts import AccountRepo


SECRET_KEY = os.environ.get("SECRET_KEY")
ALGORITHM = "HS256"

class Token(BaseModel):
    access_token: str
    token_type: str
    user_id: int
    full_name: str
    phone_number: str

class TokenData(BaseModel):
    username: str | None = None

class User(BaseModel):
    id: int
    username: str
    full_name: str | None = None
    phone_number: str
    disabled: bool | None = None

class UserInDB(User):
    hashed_password: str


repo = AccountRepo()
user_db = {"accounts": repo.get_accounts_verify()}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash( password):
    return pwd_context.hash(password)

def get_user(db, username: str):
    accounts = db["accounts"]
    for i in range(len(accounts)):
        username2 = accounts[i].username
        if username == username2:
            return UserInDB(
                id=accounts[i].id,
                username=accounts[i].username,
                full_name=accounts[i].full_name,
                phone_number=accounts[i].phone_number,
                disabled=accounts[i].disabled,
                hashed_password=accounts[i].hashed_password,
            )

def authenticate_user(db, username: str, password: str):
    user = get_user(db, username)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False

    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=30)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credential_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"}
        )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credential_exception

        token_data = TokenData(username=username)
    except JWTError:
        raise credential_exception

    user = get_user(user_db, username=token_data.username)
    if user is None:
        raise credential_exception

    return user

async def get_current_active_user(current_user: UserInDB = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")

    return current_user
