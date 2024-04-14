from pymongo import MongoClient
from bson import ObjectId
client= MongoClient("link to mongoDB")
db = client.passwordDB
collection = db.password

def get_passwordsDB():
  return collection.find({})

def get_by_mailDB(mail):
  return collection.find_one({"email": mail})

def add_passwordDB(obj):
  collection.insert_one(obj)

def update_passwordDB(id,obj):
 collection.update_one({"_id": ObjectId(id)},{"$set":obj})

def delete_passwordDB(id):
  collection.delete_one({"id": ObjectId(id)})
  

