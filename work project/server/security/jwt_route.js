const jwt_bl = require('./jwt_bll')
const express = require('express')
const jwt = require("jsonwebtoken");

const jwt_router = express.Router()


jwt_router.post("/login", async (req, resp) => {
    const user = req.body

    let bool = await jwt_bl.login(user)
    if (bool) {
        let token = jwt_bl.createToken(user)
        resp.status(200).json({token : token});
    } else { resp.status(404).json({ msg: "user not found" }) }

})

jwt_router.post("/verify", (req, resp) => {
    const { token } = req.body
    if (!token) resp.status(404).json({ auth: false, msg: "no token provider" })

    jwt.verify(token, "secret", (err, decodedToken) => {
        if (err) resp.status(401).json({ auth: false, msg: "Invalid token" })

        resp.status(200).json({ auth: true, token: decodedToken })
    })
})


module.exports = jwt_router