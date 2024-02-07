var express = require("express");
var app = express();
var link ="<br><a style='backgroung-color : red; text-decoration:none; font-size:20; font-weight:900'  href='/'>Home </a >&emsp;&emsp;<a style='backgroung-color : red; text-decoration:none; font-size:20; font-weight:900' href='/about'>About</a>&emsp;&emsp;<a style='backgroung-color : red; text-decoration:none; font-size:20; font-weight:900' href='/contact'>Contact</a>&emsp;&emsp; "
app.get("/",function(req,res){
    res.send("<center><h1>This is Home Page</h1></center>"+link)
})
app.get("/about",function(req,res){
    res.send("<center><h1>This is About Pge</h1></center>"+link)
})
app.get("/contact",function(req,res){
    res.send("<center><h1>This is contact Pge</h1></center>"+link)
})
.listen(5000)