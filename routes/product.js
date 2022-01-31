const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/getallproduct", async (req, res) => {
  try {
    const allprod = await Product.find();
    allprod;
    await res.status(201).json(allprod);
  } catch (error) {
    console.log("erreur get product", error);
    res.status(401).json({ msg: `erreur get product` });
  }
});

router.get("/getprodbyid/:id", async (req, res) => {
  const id = req.params.id;
  try {
      const prodctbyid = await Product.findById(id);
      res.status(201).json(prodctbyid);
  } catch (error) {
      console.error("get Product failed", error);
      res.status(401).json({ msg: `get Product Failed` });
  }
});
router.get("/getprodbyname/:name", async (req, res) => {
  const namee = req.params.name;
  try {
      const prodctbyname = await Product.find({ name : namee});
      res.status(201).json(prodctbyname);
  } catch (error) {
      console.error("get Product failed", error);
      res.status(401).json({ msg: `get Product Failed` });
  }
});
router.post("/addproduct", async (req, res) => {
  const newprod = req.body;
  const searchResult = await Product.findOne({ name: newprod.name });
  if (searchResult)
    return res.status(404).json({ msg: `PORUDCT already exist` });

  try {
    const nu = new Product(newprod);
    await nu.save();
    await res.status(201).json({ msg: `Product added successfully` });
  } catch (error) {
    console.error("Product register failed", error);
    res.status(401).json({ msg: `Product register Failed` });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const idd = req.params.id;
  console.log(idd);
  try {
    await Product.findByIdAndDelete(idd);
    res.status(201).json({ msg: "Product deleted" });
  } catch (error) {
    console.error("Product deleting failed", error);
    res.status(401).json({ msg: `Product deleting Failed` });
  }
});
//update
router.patch("/update/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await Product.findByIdAndUpdate(_id, req.body);
    await res.status(201).json({ msg: "Product updated successfully" });
  } catch (error) {
    console.error("Product update failed", error);
    res.status(401).json({ msg: `Product update Failed` });
  }
});

module.exports = router;
