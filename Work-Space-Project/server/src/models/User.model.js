const { default: mongoose } = require("mongoose");


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        uniqued:true,
        lc
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    
})