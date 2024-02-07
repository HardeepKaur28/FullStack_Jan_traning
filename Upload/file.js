var express = require ('express')
var app = express();
const mongoose=require('mongoose')
const user=require('./user')
const path=require('path')
const fs=require('fs')
const multer=require('multer')
app.set('view engine' , 'ejs')
app.use(express.static('uploads'))
mongoose.set('strictQuery' , true)

mongoose.connect('mongodb://localhost:27017/mongodb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const uploadPath=path.join(__dirname,'uploads');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        fs.mkdirSync(uploadPath, {recursive: true});
        cb(null,uploadPath);
    },
    filename: function(req,file,cb){
        return cb(null,file.originalname);
    },

});
const upload = multer({storage})
app.use(express.urlencoded({extended:false}))
app.get("/" , async function(req, res){
    res.render('index')
})
app.get("/AllImage", async function(req,res){
    var data=await user.find()
    res.render("AllImage", {data: data})
})

app.post('/upload', upload.single('profileimage'), async function(req,res){
    try{
        const {originalname}=req.file;
        const imageDocument=new user({
            originalname,
        })
        const result=await imageDocument.save();
        console.log(result);

        res.render('index',{msg: "Record Added Successfully", imagePath: req.file.path})
    }
    catch(error){
        console.log("Error: ", error.message);
        res.render('index',{msg: "Error saving method", imagePath:null});
    }
})
.listen(5050)