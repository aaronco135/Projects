from bson import ObjectId
from flask import Flask
from flask_cors import CORS
import json

from users_router import users

class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self, obj)
    
app = Flask(__name__)

CORS(app)

app.json_encoder = JSONEncoder

app.register_blueprint(users, url_prefix="/users")


app.run(debug=True)