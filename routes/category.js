const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

router.get("/getallcategory", async (req, res) => {
  try {
    const allcat = await Category.find();
    allcat;
    await res.status(201).json(allcat);
  } catch (error) {
    console.log("erreur get Category", error);
    res.status(401).json({ msg: `erreur get Category` });
  }
});
router.get("/getcategorybyid/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const allcat = await Category.findById(id);
    allcat;
    await res.status(201).json(allcat);
  } catch (error) {
    console.log("erreur get Category", error);
    res.status(401).json({ msg: `erreur get Category` });
  }
});
router.post('/addcategory', async (req,res)=>{
    const  newcat  = req.body;
    
      const searchResult = await Category.findOne({name : newcat.name});
      if(newcat.name.length==0) return res.status(404).json({ msg: `le nom de categorie est vide` });
      if (searchResult) return res.status(404).json({ msg: `Category already exist` });

    try {

   const nu = new Category(newcat);
    await nu.save();
    await res.status(201).json({ msg: `Category added successfully` });
  } catch (error) {
    console.error("Category register failed", error);
    res.status(401).json({ msg: `Category register Failed` });
  }
})

router.delete('/delete/:id',async(req,res)=>{
    const idd = req.params.id;
    console.log(idd)
    try {
        await Category.findByIdAndDelete(idd);
        res.status(201).json({msg:"Category deleted"})
    } catch (error) {
         console.error("Category deleting failed", error);
        res.status(401).json({ msg: `Category deleting Failed` });
    }
})

//update
router.patch("/update/:id", async (req, res) => {
      const id = req.params.id;

  try {
    const xx = req.body;
      if(xx.name.length==0) return res.status(404).json({ msg: `le nom de categorie est vide` });
    await Category.findByIdAndUpdate(id, req.body);
    await res.status(201).json({ msg: "Category updated successfully" });
  } catch (error) {
    console.error("Category update failed", error);
    res.status(401).json({ msg: `Category update Failed` });
  }
});

module.exports=router;