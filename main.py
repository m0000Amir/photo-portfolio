from fastapi import FastAPI
from db.database import engine
from db import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/user/{name}")
async def read_item(name):
    return {"user": name}


origins = [
    "http://localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],\
    allow_headers = ["*"]
)



models.Base.metadata.create_all(engine)

