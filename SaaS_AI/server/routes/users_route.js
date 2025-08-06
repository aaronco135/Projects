const express = require("express")
const router = express.Router()

const {get_Member,add_Member,update_Member,delete_Member}=  require("../DALs/users_dal")
const {add_user_cv} = require("../DALs/cv_dal")



router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await get_Member(id);
    res.status(200).json(user);
  } catch (err) {
    console.error("Erreur GET /api/users/:email", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



router.post("/", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await add_Member(userData);
    await add_user_cv({email : userData.email, cvs : []})
    res.status(200).json(newUser);
  } catch (err) {
    console.error("Erreur POST /api/users", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const updatedUser = await update_Member(id, newData);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Erreur PUT /api/users/:email", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



router.delete("/:email", async (req, res) => {
  try {
    const { id } = req.params;
    const response  = await delete_Member(id);
    res.status(200).json(response);

  } catch (err) {
    console.error("Erreur DELETE /api/users/:email", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;