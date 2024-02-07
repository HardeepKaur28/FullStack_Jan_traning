const mongoose=require('mongoose')
const sessionSchema=new mongoose.Schema({
    uname:String,
    password:String
    
})

module.exports=mongoose.model("session1",sessionSchema)
