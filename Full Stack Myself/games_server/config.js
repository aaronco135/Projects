const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aaroncohen115:oH8jrG6bU2fMPNKl@cluster0.g10rwdu.mongodb.net/gamesDB")
.then(data => console.log("Connected To DB !!"))
.catch(e => console.log(e))
