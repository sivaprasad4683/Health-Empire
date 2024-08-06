const mongoose=require("mongoose")
const Footerschema=new mongoose.Schema
({
    Name:{type:String},
    Email:{type:String},
    Comments:{type:String},
})
module.exports=new mongoose.model("Footer",Footerschema)