const express = require("express");
const Devis = require("../models/Devis");
const router = express.Router();

router.get("/getalldevis", async (req, res) => {
  try {
    const alldevis = await Devis.find();
    await res.status(200).json(alldevis);
  } catch (error) {
    console.error("Devis get failed", error);
    res.status(401).json({ msg: `Devis get Failed` });
  }
});

router.post("/adddevis", async (req, res) => {
  const newDevis = req.body;
  try {
    const nd = Devis(newDevis);
    await nd.save();
    await res.status(201).json({ msg: `Devis added successfully` });
  } catch (error) {
    console.error("Devis register failed", error);
    res.status(401).json({ msg: `Devis register Failed` });
  }
});


module.exports= router;