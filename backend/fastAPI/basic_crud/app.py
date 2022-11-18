from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Text, Optional
from datetime import datetime
from uuid import uuid4

app = FastAPI()


class Post(BaseModel):
    id: Optional[str]
    title: str
    author: str
    content: Text
    created_at: datetime = datetime.now()
    published_at: Optional[datetime]
    published : bool = False

class PostUpdate(BaseModel):
    title: Optional[str]
    author: Optional[str]
    content: Optional[Text]

data = [
]

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/post")
def read_post():
    return data

@app.post("/post")
def save_post(item: Post):
    item.id = str(uuid4())
    data.append(item.dict())
    return data[-1]

@app.get("/post/{id}")
def read_post_id(id: str):
    for d in data:
        if d["id"] == id:
            return d
    raise HTTPException(status_code=404, detail="Post not found")

@app.delete(path="/post/{id}")
def delete_post(id: str):
    for i, d in enumerate(data):
        if d["id"] == id:
            data.pop(i)
            return {"message": "Post deleted"}
    raise HTTPException(status_code=404, detail="Post not found")

@app.put(path="/post/{id}")
def update_post(id: str, item: PostUpdate):
    for i, d in enumerate(data):
        if d["id"] == id:
            data[i]["title"] = item.title
            data[i]["author"] = item.author
            data[i]["content"] = item.content
            return data[i]
    raise HTTPException(status_code=404, detail="Post not found")