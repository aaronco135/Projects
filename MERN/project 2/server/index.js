const router = require('./router')

const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/users', router)

app.listen(3000,()=>{
    console.log("server is run on 3000 !")
})