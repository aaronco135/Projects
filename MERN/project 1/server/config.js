const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aaroncohen115:mbwysRYz3usSfIyK@cluster0.5zpqf3s.mongodb.net/')
.then(() => { console.log("Database is connected!"); })
    .catch((err)=>{console.log(err);})