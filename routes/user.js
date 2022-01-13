const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretOrKey = process.env.secretOrKey;



router.get("/getallusers", async (req, res) => {

  
  try {
    const allusers = await User.find();
    allusers;
    await res.header('Content-Range','Users 0-20/20').status(201).json(allusers);
  } catch (error) {
    console.log("erreur get users", error);
  }
});

router.post("/adduser", async (req, res) => {
 const { name, email, phoneNumber, password ,role} = req.body;
  const searchResult = await User.findOne({ email });
  const counUsrs = await User.count() ;

  console.log(searchResult);
  if (searchResult) return res.status(404).json({ msg: `User already exist` });

  try {
    const newUser = new User({
      order:counUsrs + 1 ,
      name,
      email,
      phoneNumber,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    newUser.password = hash;

    await newUser.save();
    await res.status(201).json({ msg: `User added successfully` });
  } catch (error) {
    console.error("User register failed", error);
    res.status(401).json({ msg: `User register Failed` });
  }
});

router.delete('/delete/:id',async(req,res)=>{
    const idd = req.params.id;
    console.log(idd)
    try {
        await User.findByIdAndDelete(idd);
        res.status(201).json({msg:"user deleted"})
    } catch (error) {
         console.error("USER deleting failed", error);
        res.status(401).json({ msg: `USER deleting Failed` });
    }
})


//login 
router.post("/login", async (req,res)=>{
   const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(401).json({ msg: "Wrong email" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).json({ msg: "Wrong password" });

  try {
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      
    };

    const token = await jwt.sign(payload, secretOrKey);

    return res.status(200).json({ token: `Bearer ${token}`, role:user.role });
  } catch (error) {
    console.error(error);
    res.status(404).json({ errors: error });
  }
});


//update 

router.patch("/update/:id", async (req, res) => {
      const _id = req.params.id;

  try {
    await User.findByIdAndUpdate(_id, req.body);
    await res.status(201).json({ msg: "User updated successfully" });
  } catch (error) {
    console.error("User update failed", error);
    res.status(401).json({ msg: `User update Failed` });
  }
});

module.exports=router;