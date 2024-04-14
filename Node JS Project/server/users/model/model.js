const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    exId : { required: true, type: Number },
    name : { required : true, type: String},
    numOfAction : {required : true, type: Number}
})

const user = mongoose.model("users",UserSchema)

module.exports = user;