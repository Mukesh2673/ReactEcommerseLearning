const mongoose = require('mongoose');
//schema for user attempt question and answer
var quiz=new mongoose.Schema({
    Username:{type:String},
    Answers:{type:Array }
    
})
//model
const Quizdetails=new mongoose.model("Quizdetails",quiz);




//schema for quiz question and answer
var question=new mongoose.Schema({
    question:{type:Array}
})
//model
const Quizquestions=new mongoose.model("Quizquestion",question)

module.exports={Quizdetails,Quizquestions};