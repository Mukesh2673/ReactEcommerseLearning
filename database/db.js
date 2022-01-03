const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/quizsystem';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("connection Success Full"))
.catch((err)=>console.log(err));
const {Userregister}=require("./Model/Userregister");
const {Quizdetails,Quizquestions}=require("./Model/quizdetailsmodel");
const {StudentResult}=require("./Model/quizResult");





exports.insertquiz=async function(userInput,userDetails,req,res){

    const Insertdata=new Quizdetails({
        Username:userDetails.username,
        Answers:userInput
    })
  
   Insertdata.save(function(err){
        if(err){
            res.sendStatus(423); 
           console.log(err);
        
        }
        else{
            res.sendStatus(200);
        }

    });
  

}
//get all data 
exports.userdetails=async function(req,res){
    const alldata= await Quizdetails.find({});
    let a=alldata[0].Answers[0];
    return alldata;
    
},
//get data by id

exports.userAnswerdetails=async function(t,req,res){
    const useranswer=await Quizdetails.findById(Object.values(t));
    res.send(useranswer);
}
//get questions answer quiz details
exports.quizdetails=async function(req,res){
    const quiz=await Quizquestions.find({});
    res.status(200).send(quiz[0]);

}
//get logged in user details 
exports.loggeduserdetails=async function(req,res,t){
    let data= await Userregister.findById(Object.values(t));
    return data;
  
}



//register
exports.userregisterdetails=async function (userdata,req,res){

    const salt=await bcrypt.genSalt(10);
    const bpass=await bcrypt.hash(userdata.password,salt);
    const Insertuserdata=new Userregister({
        Username:userdata.username,
        password:bpass,
        Email:userdata.Email,
        Mobile:userdata.Mobile,
        Profile:userdata.Profile
    })
    Insertuserdata.save(function(err){
        if(err){
            res.status(406).json({
                message: "User Already exist"
            });
        
        }
        else{
         
            res.sendStatus(200);
        }

    });
}
//login
exports.userLogin=async function(req,res,userlogin){
    let username=userlogin.username;
    let password1=userlogin.password;
    try {
     let user=await Userregister.findOne({Username:username})
    

     if(!user)
        {
            res.status(404).json({
                message: "Invalid User Name"
            });
        }
     else{
         return user;
        }   

    }

    
    catch (e) {
        console.error(e);
        res.status(404).json({
          message: "Server Error"
        });
      }
    }
    //publish result 

    var Result=new mongoose.Schema({
        StudentName:{type:String},
        TotalQuestions:{type:Number},
        AttemptedQuestions:{type:Number},
        TotalMarks:{type:Number}
     })









exports.insertresult=async function(req,res,result){

     const Insertresult=new StudentResult({
        StudentName:result.name,
        TotalQuestions:result.totalquestion,
        AttemptedQuestions:result.attempted,
        TotalMarks:result.Totalmarks
      })
   Insertresult.save(function(err){
        if(err){
            console.log({err});
            let message = err.message.startsWith('E11000 duplicate key error') ? 'Result already submitted' : err?.message || 'Somtehing went wrong' 
            res.status(423).json({error: message}); 
           }
        else{
            res.sendStatus(200);
        }

    });
  

}




