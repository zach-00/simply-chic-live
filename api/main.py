from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import os
from routers import appointments, accounts
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from queries.accounts import AccountRepo
from authenticator import authenticator, user_db, Token



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(appointments.router)
app.include_router(accounts.router)

ACCESS_TOKEN_EXPIRE_MINUTES = 30

# SECRET_KEY = os.environ.get("SECRET_KEY")
# ALGORITHM = "HSA256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 30

# class Token(BaseModel):
#     access_token: str
#     token_type: str

# class TokenData(BaseModel):
#     username: str | None = None

# class User(BaseModel):
#     username: str
#     full_name: str | None = None
#     disabled: bool | None = None

# class UserInDB(User):
#     hashed_password: str


# repo = AccountRepo()
# user_db = repo.get_accounts()

# pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# class Authenticator:
#     def verify_password(self, plain_password, hashed_password):
#         return pwd_context.verify(plain_password, hashed_password)

#     def get_password_hash(self, password):
#         return pwd_context.hash(password)

#     def get_user(self, db, username: str):
#         accounts = db["accounts"]
#         for acc in accounts:
#             if acc.get("username") == username:
#                 user_data = acc
#                 return UserInDB(**user_data)

#     def authenticate_user(self, db, username: str, password: str):
#         user = self.get_user(db, username)
#         if not user:
#             return False
#         if not self.verify_password(password, user.hashed_password):
#             return False

#         return user

#     def create_access_token(self, data: dict, expires_delta: timedelta | None = None):
#         to_encode = data.copy()
#         if expires_delta:
#             expire = datetime.utcnow() + expires_delta
#         else:
#             expire = datetime.utcnow() + timedelta(minutes=30)

#         to_encode.update({"exp": expire})
#         encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
#         return encoded_jwt

#     async def get_current_user(self, token: str = Depends(oauth2_scheme)):
#         credential_exception = HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Could not validate credentials",
#             headers={"WWW-Authenticate": "Bearer"}
#             )
#         try:
#             payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
#             username: str = payload.get("sub")
#             if username is None:
#                 raise credential_exception

#             token_data = TokenData(username=username)
#         except JWTError:
#             raise credential_exception

#         user = self.get_user(user_db, username=token_data.username)
#         if user is None:
#             raise credential_exception

#         return user

#     async def get_current_active_user(self, current_user: UserInDB = Depends(get_current_user)):
#         if current_user.disabled:
#             raise HTTPException(status_code=400, detail="Inactive user")

#         return current_user


# authenticator = Authenticator()


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticator.authenticate_user(user_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"}
            )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    access_token = authenticator.create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
        )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/")
def root():
    return {"message": "You hit the root path!"}
