from BLL.movies_bl  import MoviesManagement
from flask import Blueprint,request,jsonify

movies = Blueprint("movies",__name__)

movies_bl = MoviesManagement()

@movies.route("/",methods = ["GET"])
def get_all():
    data = movies_bl.get_all_movies()
    return jsonify(data)

@movies.route("/<id>",methods = ["GET"])
def get_by_id(id):
    movie = movies_bl.get_a_movie(id)
    return jsonify(movie)

@movies.route("/",methods = ["POST"])
def add_one():
    obj = request.json
    result = movies_bl.add_a_movie(obj)
    return jsonify(result)

@movies.route("/<id>",methods = ["PUT"])
def update_one(id):
    obj = request.json
    result = movies_bl.update_a_movie(id,obj)
    return jsonify(result)

@movies.route("/<id>",methods = ["DELETE"])
def delete_one(id):
    result = movies_bl.delete_a_movie(id)
    return jsonify(result)
