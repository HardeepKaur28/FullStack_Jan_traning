const mongoose = require('mongoose')
var express = require ('express')
var app = express();
const user = require('./user')
app.set('view engine' , 'ejs')
mongoose.set('strictQuery' , true)
mongoose.connect('mongodb://localhost:27017/mongodb', 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get('/' , async function (req,res){
    let data = await user.find();
    res.render('home',{dt:data})
})
app.get ('/addData', async function (req,res){
    if(req.query.submit){
        let n =req.query.n;
        let c = req.query.c;
        let dt = { "name":n,"course":c}
        let std = new user(dt);
        let result = await std.save();
        console.log("Data Saved");
        console.log(result);
        return  res.redirect("/")
    }
    else{
        res.render('addData' , {data : {}})
    }
})
app.get('/delete', async function(req,res){
   
    var id=req.query.delid;
    const result=await user.deleteOne({_id: id});
    console.log(result);
    res.redirect("/")

}) 
app.get("/edit" , async function (req,res)
{
    if(req.query.upid)
    {
        var id = req.query.upid;
        var data= await user.find({_id: id});
        res.render("edit",{ data: data})
       
    }else if(req.query.submit){
        var id = req.query.i;
        var n = req.query.n;
        var c = req.query.c;
        var result = await user.updateOne({_id: id},{$set:{ name: n , course: c} });
        console.log(result);
        res.redirect("/")
    }
    else{
        res.redirect("/")
     }
})
.listen(5000)
