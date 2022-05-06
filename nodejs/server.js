'use strict';
var express = require('express');
let cors = require("cors");

var app = express();
app.use((req,res,next)=>{
    res.setHeader('Acces-Control-Allow-Origin','*');
    res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
    next(); 
})
app.use(express.json({type: '*/*'}));

app.use(cors());
app.use(express.static(`${__dirname}/public`));

var test ;

app.post('/api', function(req, res){
  var v= req.body;
  
  //test=JSON.parse(v);
  
  
  console.log(v.sökord);
  console.log(req.body);
  
  
res.send((new Date()).toLocaleTimeString()+v.sökord);

});

app.listen(3000);