const express = require('express');
const gamesBL = require('./bl')

const games_router = express.Router()


games_router.get('/' , async (req,resp)=>{
    try{
        const games = await gamesBL.getGames()
        resp.status(200).json(games);
    }
   catch(e){
    { resp.status(500).json({ msg: "users not found" }) }
   }
})
games_router.get('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const game = await gamesBL.getGame(id)
        resp.status(200).json(game);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found" }) }
   }
})
games_router.post('/' , async (req,resp)=>{
    try{
        const obj= req.body
        const response = await gamesBL.AddGame(obj)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: e}) }
   }
})
games_router.put('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const obj = req.body
        const result = await gamesBL.updateGame(id,obj)
        resp.status(200).json(result);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found" }) }
   }
})

games_router.delete('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const response = await gamesBL.DeleteGame(id)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: "user not found"}) }
   }
})

module.exports = games_router
