const express = require("express");
const Client = require("../models/Client");
const router = express.Router();


router.get("/getallclient", async (req, res) => {

  
  try {
    const allclients = await Client.find();
    allclients;
    await res.header('Content-Range','Clients 0-20/20').status(201).json(allclients);
  } catch (error) {
    console.log("erreur get clients", error);
  }
});


router.post('/addclient', async (req,res)=>{
    const  newClient  = req.body;
      const searchResult = await Client.findOne({name : newClient.name});
      if (searchResult) return res.status(404).json({ msg: `Client already exist` });

    try {

   const nu = new Client(newClient);
    await nu.save();
    await res.status(201).json({ msg: `Client added successfully` });
  } catch (error) {
    console.error("client register failed", error);
    res.status(401).json({ msg: `Client register Failed` });
  }
})


router.delete('/delete/:id',async(req,res)=>{
    const idd = req.params.id;
    console.log(idd)
    try {
        await Client.findByIdAndDelete(idd);
        res.status(201).json({msg:"Client deleted"})
    } catch (error) {
         console.error("Client deleting failed", error);
        res.status(401).json({ msg: `Client deleting Failed` });
    }
})
//update
router.patch('/update/:id',async(req,res)=>{
   const _id = req.params.id;

  try {
    await Client.findByIdAndUpdate(_id, req.body);
    await res.status(201).json({ msg: "Client updated successfully hhhh" });
  } catch (error) {
    console.error("Client update failed", error);
    res.status(401).json({ msg: `Client update Failed` });
  }
})
module.exports=router;