const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  vemail: String,
  vname: String,
  vpass: String,
});
module.exports = mongoose.model("voters", voterSchema);
