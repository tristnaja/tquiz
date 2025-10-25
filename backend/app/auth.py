from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import JWTError, jwt

from app import models, schemas, utils, database
from app.config import settings  # to get env vars

router = APIRouter(prefix="/auth", tags=["Authentication"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")


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
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(
        models.User.username == form_data.username).first()

    if not user or not utils.verify_password(form_data.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    access_token = utils.create_access_token(
        data={"sub": str(user.id), "username": user.username,
              "email": user.email}
    )

    return {"access_token": access_token, "token_type": "bearer"}


# Protected route example
@router.get("/me", response_model=schemas.UserResponse)
def get_me(token: str = Depends(oauth2_scheme)):
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
