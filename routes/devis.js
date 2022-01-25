const express = require("express");
const Devis = require("../models/Devis");
const Product = require("../models/Product")
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

router.get("/getlistproduitindevis", async(req,res)=>{
  try {
    const xxxx = await Devis.find({},{listproduit:1});
    const pp = await Product.find();
    const xxx = xxxx.map(el=>el.listproduit).map(e=>e.map(x =>x.produit));
    const zz =[];
    
    
        await res.status(200).json(xxx);

  } catch (error) {
    console.error("Devis get failed", error);
    res.status(401).json({ msg: `Devis get Failed` });
    
  }
})

router.delete("/delete/:id", async (req, res) => {
  const idd = req.params.id;
  try {
    await Devis.findOneAndDelete(idd);
    res.status(201).json({ msg: `Devis deleted successfully` });
  } catch (error) {
    console.error("Devis deleted failed", error);
    res.status(401).json({ msg: `Devis register Failed` });
  }
});


module.exports= router;