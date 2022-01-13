const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String  },
  price: { type: Number,  min: 0 },
  description: String,
  isservice:Boolean,
  categories: [{ type: mongoose.Types.ObjectId, ref: "Category" }]
});

module.exports =Product= new mongoose.model("product", productSchema);
