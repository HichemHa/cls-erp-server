const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    name : {type:String,default:"********"},
    email: {type:String,default:"********"},
    adress:{type:String,default:"********"},
    phoneNumber: {type:Number,default:00},
    tva:{type:Number,default:19},
    m_fiscal : {type:String,default:"********"},
    
})

module.exports = Company = mongoose.model("Company", CompanySchema);


