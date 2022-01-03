const mongoose = require('mongoose');
//user register Schema
var users=new mongoose.Schema({
    Username:{type:String,unique:true},
    password:{type:String},
    Email:{type:String,unique:true},
    Mobile:{type:Number,unique:true},
    Profile:{type:String}

 })
 //create model to run mongoose query
 const Userregister=new mongoose.model("Userregister",users) 


module.exports = {Userregister};