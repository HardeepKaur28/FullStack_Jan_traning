var express = require('express');
var app = express();

app.set('view engine', 'ejs');
var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "bankingdp"
});
con.connect()

app.get("/create", function (req, res) {
    if (req.query.submit) {
        var ac = "101"; 
        var p = req.query.p;
        var n = req.query.n;
        var fn = req.query.fn;
        var e = req.query.e;
        var phone = req.query.phone;
        var g = req.query.g;
        var c = req.query.c;
        var s = req.query.s;
        var city = req.query.city;
        var amt = req.query.amt;

        con.query("SELECT * FROM sbibank", function (err, result) {
            if (!err) {
                if (result.length > 0) {
                    ac = "SBI"+(result.length + 101);
                } 
                else 
                    ac = "SBI101"
                

                con.query(`INSERT INTO sbibank VALUES('${ac}' , '${p}','${n}','${fn}','${e}','${phone}','${g}','${c}','${s}','${city}','${amt}')`, function (err, result) {
                    if (!err) {
                        res.render("create", { msg: "Account created successfully with account number " + ac });
                    } 
                    else 
                    res.send("Error: " + err);
                    
                });
            } 
            else 
            res.send("Err: " );
            
        });
    } 
    else 
    res.render("create",{msg:""});
    
})

app.get("/deposit", function(req, res) {
    if (req.query.submit) {
        var ac = req.query.ac;
        var p = req.query.p;
        var amt = parseInt(req.query.amt);
        
        con.query(`SELECT * FROM sbibank WHERE AccountNo = ${con.escape(ac)} AND Pin = ${con.escape(p)}`, function(err, result) {
          
            if (!err) {
                if (result.length > 0) {
                    var camt = parseInt(result[0].Amount);
                    if (camt >= amt) {
                        camt = camt + amt;
                        con.query(`update sbibank set Amount='${camt}' where AccountNo='${ac}' `, function(err, result) {
                            if (!err) {
                                // Removed the transaction insertion code
                                res.render("deposit", {msg: "after deposit " + amt + " Your current balance is= " + camt});
                            } else {
                                res.send("Error in code " + err);
                            }
                        });
                    } 
                } else {
                    res.render("deposit", {msg: "Invalid username or password"});
                }
            } else {
                res.send("Error in code " + err);
            }
        });
    } else {
        res.render('deposit', {msg:""});
    }
})

app.get("/withdraw", function(req, res) {
    if (req.query.submit) 
    {
        var ac = req.query.ac;
        var p = req.query.p;
        var amt = parseInt(req.query.amt);
        
        con.query(`SELECT * FROM sbibank WHERE AccountNo = ${con.escape(ac)} AND Pin = ${con.escape(p)}`, function(err, result) {
            if (!err) 
            {
                if (result.length > 0) 
                {
                    var camt = parseInt(result[0].Amount);
                    if (camt >= amt) 
                    {
                        camt = camt - amt;
                        con.query(`update sbibank set Amount='${camt}' where AccountNo='${ac}' `, function(err, result) 
                        {
                            if (!err)
                             {
                                // Removed the transaction insertion code
                                res.render("withdraw", {msg: "after withdraw " + amt + " Your current balance is= " + camt});
                            } 
                            else 
                            {
                                res.send("Error in code " + err);
                            }
                        });
                    } 
                } 
                else
                 {
                    res.render("withdraw", {msg: "Invalid username or password"});
                }
            } 
            else
             {
                res.send("Error in code " + err);
            }
        });
    }
     else 
     {
        res.render('withdraw', {msg:""});
    }
}).listen(5000);
