from DAL.mongo_dal import MongoDB
from utils import get_all_ws 


mdb = MongoDB("moviesDB","movies")

class MoviesManagement:
    def __init__(self):
        self.url = 'https://api.tvmaze.com/shows'

    def get_all_movies(self):
         # take only needed keys
        return mdb.get_allDB()
    
    def get_a_movie(self,id):
        return mdb.get_by_idDB(id)
    
    def add_many_movies(self):
        data = get_all_ws(self.url)
        filtered_data = [{"name": movie["name"], "genres": movie["genres"],
                          "image": movie["image"]["medium"] , "premiered": movie["premiered"]} 
                          for movie in data if "name" in movie and "premiered" and "genres" and "image" in movie]
        mdb.add_manyDB(filtered_data)

    def add_a_movie(self,obj):
        mdb.add_oneDB(obj)

    def update_a_movie(self,id,obj):
        mdb.update_oneDB(id,obj)

    def delete_a_movie(self,id):
        mdb.delete_oneDB(id)