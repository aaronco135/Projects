const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aaroco135:8ZE9UM6dM9xt8MqS@cluster0.y48q4sj.mongodb.net/')
    .then(() => { console.log("Database is connected!"); })
    .catch((err)=>{console.log(err);})