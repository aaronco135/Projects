const express = require("express")

const app = express()

const cors = require("cors")

app.use(express.json())
app.use(cors())

const route = require('./router')
app.use("/auth",route)

app.listen(8000,()=>{
    console.log("JWT is running")
})