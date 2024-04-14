from DAL.mongo_dal import MongoDB
from utils import get_all_ws 


mdb = MongoDB("membersDB","members")

class MembersManagement:
    def __init__(self):
        self.url = 'https://jsonplaceholder.typicode.com/users'

    def get_all_members(self):
       # take only needed keys
       return mdb.get_allDB()

    def get_a_member(self,id):
      return  mdb.get_by_idDB(id)

    def add_many_members(self):
        data = get_all_ws(self.url)
        filtered_data = [{"name": usr["name"], "email": usr["email"], "city": usr["address"]["city"]} for usr in data if "name" in usr and "email" and "city" in usr]
        mdb.add_manyDB(filtered_data)

    def add_a_member(self,obj):
        mdb.add_oneDB(obj)
        
    def update_a_member(self,id,obj):
        mdb.update_oneDB(id,obj)

    def delete_a_member(self,id):
        mdb.delete_oneDB(id)