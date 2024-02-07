var express = require('express');
var mongoose = require('mongoose')
const user = require('./user')

const cookieParser = require('cookie-parser')
const session = require('express-session');
var app = express();
app.set('view engine', 'ejs');

mongoose.set('strictQuery',true)
mongoose.connect('mongodb://127.0.0.1:27017/mongodb',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const oneDay = 1000*60*60*24;

app.use(session({
    secret: "thisismysecretekeysdf3456se",
    saveUninitialized:true,
    cookie:{maxAge:oneDay},
    resave:false
}))
app.set('view engine' , 'ejs')
app.get('/' , async function  (req, res)  {
    const session = req.session;
    if(session.loguser)
    {
        res.render('home' , {uname: session.loguser, st :true})
    }
    else{
        res.render('home' , {uname:'' , st:false})
    }
})

app.get('/insert',function(req,res){
    const session = req.session;
    if(req.query.submit){
        const un = req.query.un;
        const p = req.query.p;
        user.findOne({uname: un})
        .then(result =>{
            if(result){
                res.render('insert',{msg: un + ' Already Exists' , uname: session.loguser});
            }
            else{
                const newUser = new user({uname:un , password:p});
                return newUser.save();
            }
        }).then(result=>
            {
                res.render('insert' , {msg: un + ' Saved succesfully with Password : ' + p, uname:session.loguser })
            })
            .catch(err=>{
                res.render('error in your code' +err)
            })
    }
    else
    {
        res.render('insert' , {msg:'', uname: session.loguser})
    }
})

app.get('/login',function (req,res){
    if(req.query.login){
        const un = req.query.un;
        const p = req.query.p;

        user.findOne({uname: un,password: p})
        .then(result =>{
            if(result){
                const session = req.session;
                session.loguser = un;
                res.redirect('/')
            }
            else{
                res.render('login' ,{msg: 'Invalid user and password'});
            }
        })
        .catch(err =>{
            res.render("Error in login" + err);
        });
    }
    else{
        res.render('login' , {msg:''})
    }
});
app.get('/show',function (req,res){
    const session = req.session;
    if(session.loguser){
        res.render('show',{uname:session.loguser});
    }
    else{
        res.redirect('/login')
    }
});
app.get('/delete', function (req, res) {
    const session = req.session;
    if (session.loguser) {
      res.render('delete', { uname: session.loguser });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/update', function (req, res) {
    const session = req.session;
    if (session.loguser) {
      res.render('update', { uname: session.loguser });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/lout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
  })
.listen(5050)
