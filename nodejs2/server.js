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
app.use(cors());
app.use(express.static(`${__dirname}/public`));



app.get('/api', function(req, res){
res.send((new Date()).toLocaleTimeString());
});

app.listen(3000);