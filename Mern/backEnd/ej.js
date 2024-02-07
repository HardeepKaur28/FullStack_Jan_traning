const express = require('express');
const cors = require('cors')
const session = require('express-session');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const app = express();

mongoose.connect('mongodb://localhost:27017/nodevoting',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const partySchema = new Schema({
    pname:String,
})
const Party = mongoose.model('parties',partySchema);

const voterSchema = new Schema({
    name: String,
    email: String,
    pass: String
})
const Voter = mongoose.model('voters',voterSchema);

const votenowSchema = new Schema({
   party: String,
   voter: String,
   dt: Date,
})
const VoteNow = mongoose.model('votenows',votenowSchema);

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173'],
    methods:["POST","GET"],
    credentials: true
}));

app.use(session({
    secret: "this is my secret key",
    saveUninitialized: true,
    resave:false
}));

app.set('view engine','ejs');

app.post('/party',async function(req,res){
    const p = req.body.p;
    const existingParty = await Party.findOne({pname:p});

    if(existingParty){
        res.send({msg: " Party already exists with name"+p,sucess:false})
    }
    else{
        const newParty = new Party({pname:p});
        await newParty.save();
        res.send({msg:"party added successfully with name"+p,sucess: true})
    }
});
app.post('/removeParty',async function(req,res){
    const p=req.body.p;
    const existingParty=await Party.findOne({pname:p});
    if(existingParty){
        await Party.deleteOne({pname:p});
        res.send({msg:p+"Remove Successfully"});
    }else{
        res.send({msg:"no such party exists"});
    }
});


app.listen(5000)