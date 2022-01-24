const mongoose = require('mongoose');

var nextRunDate = new Date();
nextRunDate.setMonth(nextRunDate.getMonth() + 3);

const deviSchema = mongoose.Schema({
    numerodevis:Number,
    datedevis:{type:Date,default: Date.now()},
    datevalidite:{type:Date,default: nextRunDate},
    client:{ type: mongoose.Types.ObjectId, ref: "Client" },
    listproduit:[
        {
            produit:{ type: mongoose.Types.ObjectId, ref: "Product" },
            quantit:Number,
            prixtot:{type:Number,default:0},
        }
    ]
})

module.exports = Devis = new mongoose.model("Devis",deviSchema);