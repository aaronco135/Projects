from bson import ObjectId
from flask import Flask
from flask_cors import CORS
import json

from routers.members_router import members
from routers.movies_router import movies
from routers.sub_router import sub

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)
    
app = Flask(__name__)

CORS(app)

app.json_encoder = JSONEncoder

app.register_blueprint(members, url_prefix="/members")
app.register_blueprint(movies, url_prefix="/movies")
app.register_blueprint(sub, url_prefix="/subscriptions")


app.run(debug=True)