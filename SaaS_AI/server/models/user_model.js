const mongoose = require('mongoose');

const User_details = new mongoose.Schema({

    full_name: {required: true, type: String},
    email: { required: true,  unique: true, type: String },
    password: { required: true, type: String },
    token: { required: true, type: Number , default: 5 },
    createdAt: { type: Date, default: Date.now }
});


const user = mongoose.model("limitedUser", User_details);

module.exports = user;