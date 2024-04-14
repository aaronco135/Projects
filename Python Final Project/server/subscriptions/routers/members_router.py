from BLL.members_bl import MembersManagement
from flask import Blueprint,request,jsonify

members = Blueprint("members",__name__)

members_bl = MembersManagement()

@members.route("/",methods = ["GET"])
def get_all():
    data = members_bl.get_all_members()
    return jsonify(data)

@members.route("/<id>",methods = ["GET"])
def get_by_id(id):
    member = members_bl.get_a_member(id)
    return jsonify(member)

@members.route("/",methods = ["POST"])
def add_one():
    obj = request.json
    result = members_bl.add_a_member(obj)
    return jsonify(result)

@members.route("/<id>",methods = ["PUT"])
def update_one(id):
    obj = request.json
    result = members_bl.update_a_member(id,obj)
    return jsonify(result)

@members.route("/<id>",methods = ["DELETE"])
def delete_one(id):
    result = members_bl.delete_a_member(id)
    return jsonify(result)


