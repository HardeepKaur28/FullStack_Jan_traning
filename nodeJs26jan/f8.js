var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname + "//home.html")
})
app.get("/about",function(req,res){
    res.sendFile(__dirname + "//about.html")

})
app.get("/contact",function(req,res){
    res.sendFile(__dirname + "//contact.html")

})
.listen(5000)