from DAL.mongo_dal import MongoDB


mdb = MongoDB("subscriptionsDB","subscriptions")

class SubManagement:

    def get_all_sub(self):
         # take only needed keys
        return mdb.get_allDB()
        
    def get_by_id_sub(self,id):
       return mdb.get_by_idDB(id)

    def add_to_sub(self,obj):
       mdb.add_oneDB(obj)

    def update_in_sub(self,id,obj):
       mdb.update_oneDB(id,obj)

    def delete_in_sub(self,id):
         mdb.delete_oneDB(id)