from BLL.sub_bl import SubManagement
from flask import Blueprint,request,jsonify

sub = Blueprint("subscriptions",__name__)

sub_bl = SubManagement()

@sub.route("/",methods = ["GET"])
def get_all():
    data = sub_bl.get_all_sub()
    return jsonify(data)

@sub.route("/<id>",methods = ["GET"])
def get_by_id(id):
    member = sub_bl.get_by_id_sub(id)
    return jsonify(member)

@sub.route("/",methods = ["POST"])
def add_one():
    obj = request.json
    result = sub_bl.add_to_sub(obj)
    return jsonify(result)

@sub.route("/<id>",methods = ["PUT"])
def update_one(id):
    obj = request.json
    result = sub_bl.update_in_sub(id,obj)
    return jsonify(result)

@sub.route("/<id>",methods = ["DELETE"])
def delete_one(id):
    result = sub_bl.delete_in_sub(id)
    return jsonify(result)
