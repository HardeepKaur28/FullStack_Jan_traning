var express = require("express");
const mongoose = require("mongoose");
const user = require("./mongoo");
const user1 = require("./mongoo1");
const app = express();
const sessions = require("express-session");
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

mongoose.set("strict", true);

mongoose.connect("mongodb://127.0.0.1:27017/onlinevotting", {
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
app.get("/", async function (req, res) {
  if (req.query.submit) {
    var n = req.query.n;
    var data = { party: n };
    var d = await user.find({ party: n });
    console.log(d);

    if (d.length > 0) {
      res.render("Home", { msg: n + " Already exists" });
    } else {
      var std = new user(data);
      var result = await std.save();
      res.render("Home", { msg: n + "  Add Successfully " });
    }
  } else if (req.query.delparty) {
    var n = req.query.n;
    var d = await user.find({ party: n });
    if (d.length > 0) {
      var id = d[0]._id;
      await user.deleteOne({ _id: id });
      res.render("Home", { msg: n + " Remove successfully" });
    } else {
      res.render("Home", { msg: n + " no such a party exists" });
    }
  } else {
    if (req.query.Add) {
      var vn = req.query.vn;
      var em = req.query.em;
      var pass = Math.floor(Math.random() * (9999 - 1000) + 1000);
      var vdata = { vname: vn, vemail: em, vpass: pass };
      var vd = await user1.find({ vname: vn });
      if (vd.length > 0) {
        res.render("Home", { msg: vn + " Already exists " });
      } else {
        var std = new user1(vdata);
        var result = await std.save();
        res.render("Home", {
          msg: vn + " Add  successfully" + "Password is" + pass,
        });
      }
    } else if (req.query.Remove) {
      var em = req.query.em;
      var vd = await user1.find({ vemail: em });
      if (vd.length > 0) {
        var id = vd[0]._id;
        await user1.deleteOne({ _id: id });
        res.render("Home", { msg: vn + " Remove successfully" });
      } else {
        res.render("Home", { msg: vn + " No such a voter  exists" });
      }
    } else {
      res.render("Home", { msg: "" });
    }
  }
});

app.get("/login", async function (req, res) {
  if (req.query.Login) {
    var email = req.query.em;
    var pass = req.query.pa;
    var lid = await user1.find();
    var dt = lid.filter((item) => item.vemail == email && item.vpass == pass);
    if (dt.length > 0) {
      req.session.loguser = email;
      res.redirect("/VoteNow");
    } else {
      res.render("login", { msg: "Invalid Password or Email" });
    }
  } else {
    res.render("login", { msg: "" });
  }
});

app.get("/VoteNow", async function (req, res) {
  if (req.session.loguser) {
    try {
      var partiesCollection = db.collection("parties");
      var query = {};
      var projection = { _id: 0 }; 
      // Fetch data from the 'votes' collection
      var data = await partiesCollection.find(query).project(projection).toArray();
      res.render("Votenow", { uname: req.session.loguser, data });
    } catch (error) {
      console.error("Error querying the database:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/login");
  }
});


app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
