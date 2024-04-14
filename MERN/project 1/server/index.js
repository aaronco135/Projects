const router = require('./router')

const express = require('express')
const app = express()
const cors = require('cors')

require('./config')

app.use(cors())
app.use(express.json())
app.use('/students', router)

app.listen(8000,()=>{
    console.log("server is run on 8000 !")
})