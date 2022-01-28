
const express=require('express')
const cors = require('cors');
const bodyParser=require('express')
const multer=require('multer');
const app=express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./images')
    },  
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});
var upload=multer({storage:storage})


app.listen(3000, () => console.log('Server started on port 3000'));

app.post('/upload',upload.single('profileImg'),function(req,res,next){
 
    res.send('uploaded');  
})

