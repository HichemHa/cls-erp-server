const mongoose = require("mongoose");
var nextRunDate = new Date();
nextRunDate.setMonth(nextRunDate.getMonth() + 3);

const deviSchema = mongoose.Schema({
  numerodevis: Number,
  datedevis: { type: Date, default: Date.now() },
  datevalidite: { type: Date, default: nextRunDate },
  client: { type: mongoose.Types.ObjectId, ref: "Client" },
  listproduit: [
    {
      prod: {},
      qnt:Number
    },
  ],


  prixtot: { type: Number, default: 0 },
  status:{type:String,default:"in progress"}
});

module.exports = Devis = new mongoose.model("Devis", deviSchema);
