// var express=require('express')
// var app=express();
// var ar = [
//     {"id" : 101 ,"name" : "a" ,"course" :"Btech"},
//     {"id" : 102 ,"name" : "b" ,"course" :"mba"},
//     {"id" : 103 ,"name" : "c" ,"course" :"Mtech"},
//     {"id" : 104 ,"name" : "d" ,"course" :"BPhm"},
//     {"id" : 105 ,"name" : "e" ,"course" :"BA"},
// ]
// app.set('view engine','ejs')



// app.get("/",function(req,res){
//     res.render("home")
// })
// app.get("/about",function(req,res){
//     res.render("about",{name:
//     "Hardeep"})
// })
// app.get("/contact",function(req,res){
//     res.render("contact",{name:
//     "Hardeep"})
// })
// app.get("/data",function(req,res){
  
//     // ar = ["node","php","cpp","react" ,"python"]
//     res.render("data",{data:ar})
// })
// app.get("/insert",function(req,res){
//     if(req.query.submit)
//     {
    
//         var a = req.query.n;
//         var b = req.query.c;
//         var dt = {"id" : ar.length + 101 , "name:": a ,"course" : b}
//         ar.push(dt)
//         res.render("/data")
//     }
//     else
//     res.render("insert")
// })
// .listen(5000)

var express = require('express')
var app = express()
var ar = [
    { "id": 101, "name": "Vishal", "course": "Btech" },
    { "id": 102, "name": "Uday", "course": "bca" },
    { "id": 103, "name": "queue", "course": "ma" },
    { "id": 104, "name": "array", "course": "mba" }

]

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    res.render('home')
})

app.get('/about', function (req, res) {
    res.render('about')
})
app.get('/contact', function (req, res) {
    res.render('contact')
})
app.get('/data', function (req, res) {

 
    res.render('data', { data: ar })
    // arr=["node","Php","python"]
})
app.get('/insert', function (req, res) {
    if (req.query.submit) {
 
var a= req.query.n;
var b = req.query.c;
var dt ={"id":ar.length+101, "name":a, "course":b}
ar.push(dt)
res.redirect("/data")
    }
    else

    res.render('insert')
})
 

    .listen(5000)

    //xaamp