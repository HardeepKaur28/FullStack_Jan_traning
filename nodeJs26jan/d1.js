var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "",
    database: "mydp"
})
// con.connect(function(err,result){
//     if(!err){
//         console.log("connect successfully");
//     }
//     else("err"+ err)
// })

con.connect()
con.query("insert into t2(name ,course) values ('b','btech')",function(err,result){
    if (!err) {
        con.query("select * from t2" , function(err,result){
            if(!err)
            {
                result.forEach(row =>{
                    console.log(row);
                })
            }
            else{
                console.log("error"+err);
            }
        })
    }
    else{
        console.log("Error"+err);
    }
})