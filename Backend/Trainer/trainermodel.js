const mongoose=require("mongoose")
const Trainerschema=new mongoose.Schema
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
    Experience:{type:String},
    Role:{type:String},
    Dateofbirth:{type:String},
    isActive:{type:Boolean, default:false}
   

    
  
})
module.exports=new mongoose.model("Trainer",Trainerschema)