const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email : { required: true, type: String },
    password : { required : true, type: String},
})

const user = mongoose.model("users",UserSchema)

module.exports = user;