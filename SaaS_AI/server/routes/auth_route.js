
const express = require("express");
const router = express.Router();
const { loginUser } = require("../BLLs/auth_bll");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const  token = await loginUser(email, password);
    res.json(token);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.post("/verify", (req, resp) => {
  const { token } = req.body;
  if (!token) {
    return resp.status(404).json({ auth: false, msg: "no token provided" });
  }

  jwt.verify(token, "secret", (err, decodedToken) => {
    if (err) {
      return resp.status(401).json({ auth: false, msg: "Invalid token" });
    }

    return resp.status(200).json({ auth: true, token: decodedToken });
  });
});



module.exports = router;
