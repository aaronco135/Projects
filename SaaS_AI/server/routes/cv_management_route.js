const express = require("express");
const router = express.Router();

const { generateCV } = require("../BLLs/cv_generate_bll");
const {get_user_cv} = require("../DALs/cv_dal")
const {saveToUser} = require("../BLLs/cv_storage_bll")

// GET /api/cv?email=...
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user_cvs = await get_user_cv(id)
    res.status(200).json(user_cvs);

  } catch (error) {
    console.error("Erreur GET /api/cv:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /api/cv/generate
router.post("/generate", async (req, res) => {
  try {
    const { prompt , email}  = req.body;
    const result = await generateCV(prompt,email);
    res.status(200).json(result);
  } catch (error) {
    console.error("Erreur POST /api/cv/generate:", error);
    res.status(500).json({ error: "Échec génération" });
  }
});

// POST /api/cv/save
router.post("/save", async (req, res) => {
  try {
    const user = req.body;
    await saveToUser(user)
    res.json({ message: "CV has been saved " });

  } catch (error) {
    console.error("Erreur POST /api/cv/save:", error);
    res.status(500).json({ error: "Erreur d’enregistrement" });
  }
});

module.exports = router;
