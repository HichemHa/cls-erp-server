const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: String,
    description : String
});
module.exports =Category= new mongoose.model('Category', categorySchema);