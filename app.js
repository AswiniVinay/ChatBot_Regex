var express=require('express');
var controllers =require('./controllers/controllers')
var app=express();
// set template engine
app.set('view engine','ejs');

//static use

app.use(express.static('./public'));

//fire controllers
controllers(app);
//listen port

app.listen(3000);
console.log("3000");
