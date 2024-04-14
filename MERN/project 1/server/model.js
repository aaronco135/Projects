const mongoose = require('mongoose')

const student = new mongoose.Schema(
    {
        id : {type : Number , required : true},
        name : {type : String , required: true},
        faculty :  {type : String , required: true},
       grade : {
        profession : {type : String , required: true},
        score : {type : Number , required: true}
       }
    }
)

module.exports =  mongoose.model('students', student)