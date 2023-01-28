# Pydantic allows auto creation of JSON Schemas from models
# pylint: disable=import-error
# pylint: disable=missing-module-docstring
# pylint: disable=missing-class-docstring
# pylint: disable=missing-function-docstring
from typing import Optional
from pydantic import BaseModel, Field
from uuid import UUID

class Producto(BaseModel):
    _id : str | UUID = Field(default_factory=UUID, alias="_id")
    uuid: int | str | UUID = Field(default_factory=UUID, alias="_id")
    title: str
    description: Optional[str] = None
    price: float
    image: str
    quantity: int

    def __repr__(self):
        return f"Producto(title={self.title}, description={self.description}, price={self.price}, tax={self.tax}, tags={self.tags}, inStock={self.inStock})"

class Categories(BaseModel):
    _id : str
    uuid: int | str | UUID = Field(default_factory=UUID, alias="_id")
    title: str
    description: Optional[str] = None
    image: str

class UserOut(BaseModel):
    id: UUID
    email: str

class UserAuth(BaseModel):
    email: str = Field(..., description="user email")
    password: str = Field(..., min_length=5, max_length=24, description="user password")
    
