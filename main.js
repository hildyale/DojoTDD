var assert = require('chai').assert;
var express = require('express');
var app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("Servidor corriendo bien");
    
});

