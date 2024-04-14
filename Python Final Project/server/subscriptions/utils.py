import requests
def get_all_ws(link):
    return requests.get(link).json()
   
def get_by_id_ws(link,id):
     return requests.get(f"{link}/{id}").json()