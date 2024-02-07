var express = require ('express')
const mongoose = require('mongoose')
const user = require('./user')
mongoose.set('strictQuery' , true)
mongoose.connect('mongodb://localhost:27017/mongodb', 
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

async function insertData(){
    var dt = {"name" : "Pardeep" , "course"  : 'MBA'} 
    var b = new user(dt);
    var result = await b.save()
    console.log(result);
}
// insertData()
async function getData()
{
    var dt=await user.find();
    dt.forEach(row=>{
        console.log(row._id+"\t"+row.name+"\t"+row.course);
    })
}

getData()

async function delData(id){
    var dt = await user.deleteOne({_id:id})
    console.log(dt);
}

delData("65b72cedf48646bf93938e39")