const express = require('express')
const cors = require('cors')
const userRouter = require('./users/routers/routers')
const depRouter = require('./departments/routers')
const empRouter= require('./employees/routers')
const sftRouter= require('./shifts/routers')
const app = express()

//connect to DB :
require('./users/data/config')


app.use(cors())
app.use(express())

app.use("/emp",empRouter)
app.use("/dep",depRouter)
app.use("/users",userRouter)
app.use("/sft",sftRouter)


app.listen(8000,()=>{
    console.log("connected to server")
})
