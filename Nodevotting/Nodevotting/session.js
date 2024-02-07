var express = require("express");
const sessions = require("express-session");
var app = express();
app.set("view engine", "ejs");
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);
app.get("/", function (req, res) {
  req.session.myses = "Dream Tech";
  res.send("Session is Created  ");
});

app.get("/getSes", function (req, res) {
  if (req.session.myses) res.send("Session is  " + req.session.myses);
  else res.send("No session is aviable");
});

app
  .get("/delSes", function (req, res) {
    req.session.destroy();
    res.send("Session  Destroyee");
  })
  .listen(5000);
