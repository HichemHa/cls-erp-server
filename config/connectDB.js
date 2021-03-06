const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log("database connected")
  } catch (error){
    console.error(error);
  }
};

module.exports = connectDB;