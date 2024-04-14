const express = require('express')
const usersBL = require('./BL')

const router = express.Router()

router.get('/' , async (req,res)=>{
    try {
        const users = await usersBL.getAll()
        res.status(200).json(users)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

router.get('/:id' , async (req,res)=>{
    try {
        const {id} = req.params
        const user = await usersBL.getById(id)
        res.status(200).json(user)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

module.exports = router