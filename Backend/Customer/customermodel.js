const mongoose=require("mongoose")
const Customerschema=new mongoose.Schema
({
    Name:{type:String},
    Age:{type:Number},
    Email:{type:String},
    Password:{type:String},
    Address:{type:String},
    Gender:{type:String},
    State:{type:String},
    City:{type:String},
    Pincode:{type:String},
    Dateofbirth:{type:String},
    Height:{type:Number},
    Weight:{type:Number},

    
  
})
module.exports=new mongoose.model("Customer",Customerschema)