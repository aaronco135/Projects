const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aspirateurportable:sRFhGP9XLtxVYJ5L@cluster0.ikxul6w.mongodb.net/")
.then(data => console.log("Connected To DB !!"))
.catch(e => console.log(e))

