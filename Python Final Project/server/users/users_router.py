from users_bl import Users
from flask import  Blueprint,jsonify,request

users = Blueprint("users",__name__)

user_bl = Users()

@users.route("/",methods = ["GET"])
def get_all():
    users = user_bl.get_users()
    return jsonify(users)

@users.route("/", methods = ["POST"])
def add_one():
     obj = request.json
     result = user_bl.add_user_user(obj)
     return jsonify(result)

@users.route("/<id>", methods = ["PUT"])
def update_one(id):
    obj = request.json
    result = user_bl.update_user(id,obj)
    return jsonify(result)

@users.route("/<id>", methods = ["DELETE"])
def delete_one(id):
    result = user_bl.delete_user(id)
    return jsonify(result)

@users.route("/protected-route")
@user_bl.check_user
def protected_route():
    user_id = request.user_id
    return jsonify({'message': 'This is a protected route for user {}'.format(user_id)}), 200