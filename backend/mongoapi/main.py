# pylint: disable=missing-module-docstring
# pylint: disable=missing-class-docstring
# pylint: disable=missing-function-docstring
# pylint: disable=import-error
from fastapi import FastAPI, HTTPException, status

# an HTTP-specific exception class  to generate exception information
from fastapi.middleware.cors import CORSMiddleware

from model import Producto, UserOut, UserAuth
from utils import get_hashed_password
import uuid

from database import (
    fetch_one_producto,
    fetch_all_productos,
    fetch_all_categories,
    create_todo,
    update_todo,
    remove_todo,
)
app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8080",
    "https://localhost:3000",
    "https://localhost:8000",
    "*",
]

# what is a middleware?
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/api/productos")
async def get_productos():
    response = await fetch_all_productos()
    return response


@app.get("/api/producto/{title}", response_model=Producto)
async def get_todo_by_title(title):
    response = await fetch_one_producto(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.post("/api/producto/", response_model=Producto)
async def post_producto(producto: Producto):
    response = await create_todo(producto.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

# Categorias
@app.get("/api/categories")
async def get_categories():
    response = await fetch_all_categories()
    return response

# upload image category
@app.post("/api/categories/upload")
async def post_categories_image():
    response = ["status", "done"]
    return response


@app.put("/api/todo/{title}/", response_model=Producto)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo"
    raise HTTPException(404, f"There is no todo with the title {title}")
### Comment

@app.post('/signup', summary="Create new user", response_model=UserOut)
async def create_user(data: UserAuth):
    # querying database to check if user already exist
    ''' user = db.get(data.email, None)
    if user is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exist"
        ) '''
    user = {
        'email': data.email,
        'password': get_hashed_password(data.password),
        'id': str(uuid.uuid1())
    }
    #db[data.email] = user    # saving user to database
    return user
