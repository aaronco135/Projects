const express = require("express")
const checkLogin = require("./BL.js")
const jwt = require("jsonwebtoken");

const router = express.Router()

router.post("/login",  (req,resp)=>{
console.log("router");
    const user = req.body


    let bool =  checkLogin.login(user)
    console.log(bool);
    if (bool) {
        let token = checkLogin.createToken(user)
        resp.status(200).json(token);
    } else { resp.status(404).json({ msg: "user not found" }) }

})

router.post("/verify", (req,resp)=>{
    console.log("verify");
    const {token} = req.body
  

    if (!token) resp.status(404).json({ auth: false, msg: "no token provider" })

    jwt.verify(token, "secret", (err, decodedToken) => {
        if(err) resp.status(401).json({ auth: false, msg: "Invalid token" })

        resp.status(200).json({ auth: true, token: decodedToken })
    })
    
})
module.exports = router