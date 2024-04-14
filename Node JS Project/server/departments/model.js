const mongoose = require('mongoose')

const DepSchema = mongoose.Schema({
    exId : { required: true, type: Number },
    name : { required : true, type: String},
    manager : {required : true, type: String}
}) 

const dep = mongoose.model("dep",DepSchema)

module.exports = dep