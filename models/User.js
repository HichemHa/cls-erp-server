const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    order:Number,
    name : String,
    email: String,
    phoneNumber: Number,
    password:String,
    role:{
        type:String,
        default : "user",
        
    }
})

module.exports = User = mongoose.model("user", UserSchema);


