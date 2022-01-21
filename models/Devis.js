const mongoose = require('mongoose');

const deviSchema = mongoose.Schema({
    numerodevis:Number,
    datedevis:{type:Date,default: Date.now()},
    datevalidite:Date,
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