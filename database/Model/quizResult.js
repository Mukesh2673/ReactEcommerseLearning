const mongoose = require('mongoose');
//user register Schema
var Result=new mongoose.Schema({
    StudentName:{type:String,unique:true},
    TotalQuestions:{type:Number},
    AttemptedQuestions:{type:Number},
    TotalMarks:{type:Number}
 })
 //create model to run mongoose query
 const StudentResult=new mongoose.model("Result",Result) 


module.exports = {StudentResult};