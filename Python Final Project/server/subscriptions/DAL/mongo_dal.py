from pymongo import MongoClient
from bson import ObjectId
class MongoDB:
    def __init__(self,  database_name, collection_name):
        self.client = MongoClient("...")
        self.database_name = self.client[database_name]
        self.collection_name = self.database_name[collection_name]
        
    def get_allDB(self):
        try:
            data = self.collection_name.find({})
            return list(data)
        except Exception as e:
            raise e
    
    def get_by_idDB(self, id):
        try:
            return self.collection_name.find_one({"_id": ObjectId(id)})
        except Exception as e:
            raise e

    def add_oneDB(self, obj):
        try:
            return self.collection_name.insert_one(obj).inserted_id
        except Exception as e:
            raise e

    def add_manyDB(self, arr):
        try:
            return self.collection_name.insert_many(arr).inserted_ids
        except Exception as e:
            raise e

    def update_oneDB(self, id, obj):
        try:
            return self.collection_name.update_one({"_id": ObjectId(id)}, {"$set": obj})
        except Exception as e:
            raise e

    def delete_oneDB(self, id):
        try:
            return self.collection_name.delete_one({"_id": ObjectId(id)})
        except Exception as e:
            raise e
