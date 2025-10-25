from fastapi import FastAPI
from . import models, database
from .auth import router as auth_router

app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)

app.include_router(auth_router)
