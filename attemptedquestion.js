require('dotenv').config();
const express = require("express")
const app = express();
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
var cookieParser = require('cookie-parser')
app.use(cookieParser())
db = require('./database/db');
var router = express.Router();

/*---------------import middlewar-------------*/
const checkToken = require('./Middlewar/auth');
/*---------------------------------------------------- */
/* -------------------------------------------------------------------- */


router.post('/test', (req, res) => {
    var userInput = req.body.userInput;
    let userDetails = req.body.userdetails;
 
    let t = db.insertquiz(userInput, userDetails, req, res);

});
router.get('/userdetails', checkToken, async(req, res) => {
    let t = await db.userdetails(req, res);
  
    res.send(t);

});

router.post('/userAnswerdetails', checkToken, async(req, res) => {
    let t = req.body;
    let k = await db.userAnswerdetails(t, req, res);
 

});
//getquestions and answers
router.get('/quizdetails', checkToken, (req, res) => {
    let k = db.quizdetails(req, res);


})
//register
router.post('/register', (req, res) => {
    userdata = req.body;
    let k = db.userregisterdetails(userdata, req, res);

})

//loggedinUser
router.get('/loggedin',checkToken,async(req,res)=>{
    var t=req.user;
    let k=await db.loggeduserdetails(req, res, t);
    res.send(k.Username);

});
//authorised teacher user


router.get('/teacherauth',checkToken,async(req,res)=>{
    var t=req.user;
    let k=await db.loggeduserdetails(req, res, t);
    res.send(k.Profile);

});










//login details
router.post('/login', async (req, res) => {


    let userlogin = req.body;
    let user = await db.userLogin(req, res, userlogin);

    //jwt authentication
    if (user){
        let password = user.password
        let password1 = userlogin.password;


        const isMatch = await bcrypt.compare(password1, password);
        if (!isMatch) {
            res.status(200).json({
                message: "Incorrect Password !"
            });
        }
        const payload = {
            user: {
                id: user.id
            }
        };
        Jwt.sign(
            payload, process.env.SECRET_KEY, {
                expiresIn: 36000000
            },
            (err, token) => {
                if (err) throw err;
                res.cookie('authcookie', token, {
                    maxAge: 900000,
                    httpOnly: true
                }); //set token in cookies 
                res.status(200).json({
                    token
                });
            }

        );
    }
})
//publish result
router.post('/publish',async(req, res) => {
t=req.body.a;
let k=await db.insertresult(req, res, t);




});


//logout  
router.post('/logout', async (req, res) => {

    res.clearCookie("token");
    res.send({ success: true });
  });


module.exports = router;