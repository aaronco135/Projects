const express = require('express');
const userDAL = require('../DAL/user_dal')

const user_router = express.Router()

user_router.get('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const user = await userDAL.get_user_data(id)
        console.log(user)
        resp.status(200).json(user);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found" }) }
   }
})
user_router.post('/' , async (req,resp)=>{
    try{
        const obj= req.body
        const response = await userDAL.create_user(obj)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: e}) }
   }
})


module.exports = user_router