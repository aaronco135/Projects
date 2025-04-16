const jwt =require('jsonwebtoken')
const model =require('../models/user_model')

const login = async(user)=>{

    const per = await model.findOne({email : user.email , password : user.password})
    if(per) return true
    return false
}

const createToken = (user)=>{
    const token = jwt.sign(user,"secret")
    return token;
}

module.exports = {login,createToken}