const express = require('express')
const userBLL = require('../BLL/usersBLL')


const route = express.Router()


route.get('/',async (req,res) =>{
    try {
const FullData = await userBLL.DataAxios()
res.status(200).json(FullData)
} 
catch(e){
    res.status(500).json({message : e})
}
})

route.get('/:id',async (req,res) =>{
    try {
        const {id} = req.params
const FullData = await userBLL.DataAxiosById(id)
res.status(200).json(FullData)
} 
catch(e){
    res.status(500).json({message : e})
}
})

route.get('/:id',async (req,res) =>{
    try {
        const {id} = req.params
const FullData = await userBLL.DataJson(id)
res.status(200).json(FullData)
} 
catch(e){
    res.status(500).json({message : e})
}
})

route.get('/:id',async (req,res) =>{
    try {
        const {id} = req.params
const model = await userBLL.DataModel(id)
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})
module.exports = route