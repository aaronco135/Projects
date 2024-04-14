import json
import os
import sys

class ModifyJF:
    def __init__(self):
       self.url1 = "data/users.json"
       self.url2 = "data/permissions.json"

    def read_jf(self):
        PATH = os.path.join(sys.path[0],self.url1)
        with open(PATH, "r") as fp:
         return json.load(fp)
    
    def save_jf(self,data):
       PATH = os.path.join(sys.path[0],self.url1)
       with open(PATH, 'w') as fp:
        json.dump(data,fp)

    def read_jf2(self):
        PATH = os.path.join(sys.path[0],self.url2)
        with open(PATH, "r") as fp:
         return json.load(fp)
    
    def save_jf2(self,data):
       PATH = os.path.join(sys.path[0],self.url2)
       with open(PATH, 'w') as fp:
        json.dump(data,fp)


