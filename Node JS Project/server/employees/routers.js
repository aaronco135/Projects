const express = require('express')
const empBLL = require('./empBLL')


const route = express.Router()

route.get('/',async (req,res) =>{
    try {
const model = await empBLL.DataModel()
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})
module.exports = route
