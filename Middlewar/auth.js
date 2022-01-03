const Jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
    const authcookie=req.cookies.authcookie
    Jwt.verify(authcookie,process.env.SECRET_KEY,(err,data)=>{
    if(err){
        res.sendStatus(203)
    }
    else if(data.user){
        req.user=data.user;
       var t=req.user;
    
        next()
    }
    
    })
    }
