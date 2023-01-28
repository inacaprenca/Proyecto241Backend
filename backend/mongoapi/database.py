#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021
# pylint: disable=missing-module-docstring
# pylint: disable=missing-class-docstring
# pylint: disable=missing-function-docstring
# pylint: disable=import-error
import os
import motor.motor_asyncio
from model import Producto, Categories
from dotenv import load_dotenv

load_dotenv()

client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"])
database = client.sistema
collection = database.producto

async def fetch_one_producto(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all_productos():
    todos = []
    cursor = collection.find().limit(6)
    async for document in cursor:
        todos.append(Producto(**document))
    return todos
async def fetch_all_categories():
    categories = []
    cursor = database.categories.find({})
    async for document in cursor:
        categories.append(Categories(**document))
    return categories

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document


async def update_todo(title, desc):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document

async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True
 