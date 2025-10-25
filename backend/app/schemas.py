from pydantic import BaseModel, EmailStr

# Shared base model


class UserBase(BaseModel):
    username: str
    email: EmailStr


# Used when registering a new user
class UserCreate(UserBase):
    password: str


# Used when logging in
class UserLogin(BaseModel):
    username: str  # or change to email if login uses email
    password: str


# Used when returning user data (safe to send)
class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True  # allows returning SQLAlchemy objects directly


# JWT token schema
class Token(BaseModel):
    access_token: str
    token_type: str
