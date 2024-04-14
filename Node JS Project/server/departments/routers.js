const express = require('express')
const depBLL = require('./depBLL')


const route = express.Router()


route.get('/',async (req,res) =>{
    try {
const model = await depBLL.GetAll()
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})


route.get('/:id',async (req,res) =>{
    try {
        const {id} = req.params
const model = await depBLL.DataModel(id)
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})


route.post('/',async (req,res) =>{
    try {
        const obj = req.body
const model = await depBLL.PostModel(obj)
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})


route.put('/:id',async (req,res) =>{
    try {
        const obj = req.body
        const {id} = req.params
const model = await depBLL.PutModel(id,obj)
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})


route.delete('/:id',async (req,res) =>{
    try {
        const {id} = req.params
const model = await depBLL.DeleteModel(id)
res.status(200).json(model)
} 
catch(e){
    res.status(500).json({message : e})
}
})

module.exports = route
