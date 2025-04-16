const express = require('express');
const trsc_BLL = require('../BLL/transactions_bll')

const transactions_router = express.Router()


transactions_router.get('/:id' , async (req,resp)=>{
    try{
        const {id}= req.params
        const user = await trsc_BLL.Get_all_user_market_order(id)
        resp.status(200).json(user);
    }
   catch(e){
    { resp.status(500).json({ msg: "transactions no found" }) }
   }
})
transactions_router.post('/' , async (req,resp)=>{
    try{
        const obj= req.body
        const response = await trsc_BLL.Create_market_order(obj)
        resp.status(200).json(response);
    }
   catch(e){
    { resp.status(500).json({ msg: e}) }
   }
})



module.exports = transactions_router