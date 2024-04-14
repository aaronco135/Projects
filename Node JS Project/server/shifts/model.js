const mongoose = require('mongoose')

const sftSchema = mongoose.Schema({
    exId : { required: true, type: Number },
    date : { required : true, type: Date},
    StartingHour: { required : true, type: Number},
    EndingHour: { required: true, type: Number },
}) 

const sft = mongoose.model("sft",sftSchema)

module.exports = sft