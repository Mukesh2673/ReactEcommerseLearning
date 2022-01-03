const express=require("express")

var bodyParser=require('body-parser')
var cors=require('cors');
var app=express()
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
const port=1100
var question=require('./attemptedquestion')
app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  app.get('/setcookies', (req, res) => {
    res.cookie('name','mukeshs')
    res.send('name is send');
  });

  app.use("/submited",question);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
 

