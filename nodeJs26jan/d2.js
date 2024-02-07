var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "mydp"
});

con.connect()
con.query("delete from t2 where name = 'a' " , function(err,result){
    if(!err){
        console.log("Delete Successfully...");
    }
    else{
        console.log("error" , err);
    } 
})