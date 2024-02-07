const mongoose = require("mongoose");
const partySchema = new mongoose.Schema({
  party: String,
});
module.exports = mongoose.model("parties", partySchema); 

