const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aaronco:<Aaronco135!>@cluster2.kbl4ngv.mongodb.net/?retryWrites=true&w=majority").then(data => console.log("Connected To DB (users) !!")).catch(e => console.log(e))

