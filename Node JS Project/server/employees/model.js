const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    exId : { required: true, type: Number },
    FirstName : { required : true, type: String},
    LastName : { required : true, type: String},
    StartWorkYear: { required: true, type: Number },
    DepartmentID : { required : true, type: String},
   
}) 

const emp = mongoose.model("emp",empSchema)

module.exports = emp