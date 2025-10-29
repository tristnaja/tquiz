from fastapi import APIRouter, Depends, HTTPException, Request, Response
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from fastapi.security import HTTPBearer
from jose import JWTError, jwt

from app import models, schemas, utils, database
from app.config import settings  # to get env vars

router = APIRouter(prefix="/auth", tags=["Authentication"])

oauth2_scheme = HTTPBearer()


# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Register
@router.post("/register", response_model=schemas.UserResponse)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(models.User).filter(
        models.User.username == user.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_pw = utils.hash_password(user.password)
    new_user = models.User(
        username=user.username,
        email=user.email,
        password=hashed_pw
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user  # Now matches schemas.UserResponse


# Login
@router.post("/login", response_model=schemas.Token)
def login(user_data: schemas.UserLogin, response: Response, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(
        models.User.email == user_data.email).first()

    if not user or not utils.verify_password(user_data.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    token = utils.create_access_token(
        data={"sub": str(user.id), "username": user.username,
              "email": user.email}
    )

    response = JSONResponse(content={"message": "Login successful"})
    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        secure=False,
        samesite="None",
        max_age=3600,
    )

    return response


# Protected route example
@router.get("/me", response_model=schemas.UserResponse)
def get_me(request: Request):
    token = request.cookies.get("access_token")
    if not token:
        raise HTTPException(status_code=401, detail="Missing Token")
    try:
        payload = jwt.decode(token, settings.SECRET_KEY,
                             algorithms=[settings.ALGORITHM])
        username: str = payload.get("username")
        email: str = payload.get("email")
        id: int = int(payload.get("sub"))
        if username is None or email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"username": username, "email": email, "id": id}
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("access_token")
    return {"message": "Logout Successful"}
