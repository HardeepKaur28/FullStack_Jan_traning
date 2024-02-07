var express = require("express");
const mongoose = require("mongoose");
const user = require("./mongoo");
const app = express();
const oneDay = 1000 * 60 * 60 * 24;

mongoose.set("strict", true);

mongoose.connect("mongodb://127.0.0.1:27017/mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.once("open", () => {
  console.log("Connected to the database");
});
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get('/', async function(req,res)

{

  if (req.query.submit) {
    var n = req.query.n;
    var data = { party: n };
    var d = await user.find({ party: n });
    console.log(d);

    if (d.length > 0) {
      res.render("home", { msg: n + " Already exists" });
    } else {
      var std = new user(data);
      var result = await std.save();
      res.render("home", { msg: n + "  Add Successfully " });
    }
  } 

  else if (req.query.delparty) {
    var n = req.query.n;
    var d = await user.find({ party: n });
    if (d.length > 0) {
      var id = d[0]._id;
      await user.deleteOne({ _id: id });
      res.render("home", { msg: n + " Remove successfully" });
    } else {
      res.render("home", { msg: n + " no such a party exists" });
    }
  }
    else
    {
      res.render('home',{msg:""})
    }
}).listen(5050)