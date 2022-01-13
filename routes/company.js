const express = require("express");
const Company = require("../models/Company");
const router = express.Router();

router.get("/getallcompany", async (req, res) => {
  try {
    const allcompanys = await Company.find();
    allcompanys;
    await res.status(201).json(allcompanys);
  } catch (error) {
    console.log("erreur get Companys", error);
  }
});

router.post("/addcompany", async (req, res) => {
  const nmbr = await Company.count();
  if (nmbr == 0) {
    const newCompany = req.body;
    console.log("object", newCompany.name);
    const searchResult = await Company.findOne({ name: newCompany.name });
    console.log("serchresult", searchResult);
    if (searchResult)
      return res.status(404).json({ msg: `Company already exist` });
    try {
      const nu = new Company(newCompany);
      await nu.save();
      await res.status(201).json({ msg: `Company added successfully` });
    } catch (error) {
      console.error("Company register failed", error);
      res.status(401).json({ msg: `Company register Failed` });
    }
  } else {
    res.status(401).json({ msg: `il exsite deja une company` });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const idd = req.params.id;
  try {
    await Company.findOneAndDelete(idd);
    res.status(201).json({ msg: `Company deleted successfully` });
  } catch (error) {
    console.error("Company deleted failed", error);
    res.status(401).json({ msg: `Compnay register Failed` });
  }
});

//update
router.patch("/update/:id", async (req, res) => {
      const _id = req.params.id;

  try {
    await Company.findByIdAndUpdate(_id, req.body);
    await res.status(201).json({ msg: "Company updated successfully " });
  } catch (error) {
    console.error("Company update failed", error);
    res.status(401).json({ msg: `Company update Failed` });
  }
});

module.exports = router;
