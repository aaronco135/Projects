from DAL.infoJF_dal import ModifyJF
from DAL.passwordsDB_dal import get_passwordsDB ,add_passwordDB,delete_passwordDB,update_passwordDB,get_by_mailDB
import jwt
from flask import request , jsonify

user = ModifyJF()
class Users:
    def __init__(self):
         self.users_permission = user.read_jf2()
         self.users_data = user.read_jf()
         self.users_passwords = get_passwordsDB()


    def get_users(self):
        final_users =[]

        for pswrd in self.users_passwords:
          obj = {"id" :'',"fname":'',"lname":'',"email" : '',
          "password":'',"created_date": '',"time_out":0,"permission" : []}

          obj["id"] = str(pswrd["_id"])
          obj["password"] = pswrd["password"]
          obj["email"] = pswrd["email"]
                    
          for data in self.users_data["users"]:
           if data["_id"] == obj["id"]:
            obj["fname"] = data["fname"]
            obj["lname"] = data["lname"]
            obj["time_out"] = data["time_out"]
            obj["created_date"] = data["created_date"]
           

          for  prmsn in self.users_permission["permission"]:
                if prmsn["_id"] == obj["id"]:
                    obj["permission"] = prmsn["permission"]
                    break
          
          final_users.append(obj)

        return final_users
        

    def add_user(self,obj):
        # add to MongoDB
        password_obj = {"email":obj["email"], "password":obj["password"]}
        result= add_passwordDB(password_obj)

        userdb = get_by_mailDB(obj["email"])
        mongo_id = str(userdb["_id"])


        # add to permission.json
        permission_obj = {"_id": mongo_id, "permission":obj["permission"]}
        data1 = user.read_jf2()
        data1["permission"].append(permission_obj)
        user.save_jf2(data1)


          # add to users.json
        user_obj = {"_id": mongo_id, "fname":obj["fname"], "lname":obj["lname"],"time_out": obj["time_out"],"created_date":obj["created_date"]}
        data2 = user.read_jf()
        data2["users"].append(user_obj)
        user.save_jf(data2)


    def update_user(self,id,obj):
        # update in mongoDB
        password_obj = {"email":obj["email"], "password":obj["password"]}
        update_passwordDB(id,password_obj)


        #update in json file
        permission_obj = {"_id": id, "permission":obj["permission"]}
        data1 = user.read_jf2()
        for i, per in enumerate(data1["permission"]):
         if per["_id"] == id:
          data1["permission"][i].update(permission_obj)
        user.save_jf2( data1)


        user_obj = {"_id":id, "fname":obj["fname"], "lname":obj["lname"],"time_out": obj["time_out"],"created_date":obj["created_date"]}
        data2 = user.read_jf()
        for i, per in enumerate(data2["users"]):
         if per["_id"] == id:
          data2["users"][i].update(user_obj)
        user.save_jf( data2)

    

    def delete_user(self,id):
        # delete from MongoDB
        delete_passwordDB(id)
        
         # delete from json
        for i , usr in enumerate(self.users_data["users"]):
            if usr["_id"]==id:
                self.users_data["users"].pop(i)
        user.save_jf(self.users_data)

        for i , usr in enumerate(self.users_permission["permission"]):
            if usr["_id"]==id:
                self.users_permission["permission"].pop(i)
        user.save_jf2(self.users_permission)

        return "deleted ! "
         
    def check_user(self,key):
       def wrapper(*args,**kwargs):
          token = request.headers.get('Authorization', None)

          if not token :
              return jsonify({'auth': False, 'message': 'No token provided.'}), 403
          try:
             decoded = jwt.decode(token,key, algorithms=['HS256'])
             request.user_id = decoded['id']

          except jwt.ExpiredSignatureError:
            return jsonify({'auth': False, 'message': 'Token has expired.'}), 403
          except jwt.InvalidTokenError:
            return jsonify({'auth': False, 'message': 'Invalid token.'}), 403

          return self(*args, **kwargs)
 
       return wrapper


       

        


        