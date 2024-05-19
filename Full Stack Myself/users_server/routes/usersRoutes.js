const express = require('express');
const userBL = require('../BLL/bl')

const user_router = express.Router()


user_router.get('/' , async (req,resp)=>{
    try{
        const users = await userBL.getAllUsers()
        resp.status(200).json(users);
    }
   catch(e){
    { resp.status(500).json({ msg: "users not found" }) }
   }
})
user_router.get('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const user = await userBL.getUser(id)
        resp.status(200).json(user);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found" }) }
   }
})
user_router.post('/' , async (req,resp)=>{
    try{
        const obj= req.body
        const response = await userBL.AddUser(obj)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: e}) }
   }
})
user_router.put('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const obj = req.body
        const response = await userBL.UpdateUser(id,obj)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found" }) }
   }
})
user_router.delete('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const response = await userBL.DeleteUser(id)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found"}) }
   }
})

module.exports = user_router
