const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    id: { required: true, type: String },
    name: { required: true, type: String },
    image: { required: true, type: String },
    prices : [{
        value: { required: true, type: Number },
        currency: { required: true, type: Number }
       
    }],
    loginType: { required: true, type: String },
});

const game = mongoose.model("games", GameSchema);

module.exports = game;
