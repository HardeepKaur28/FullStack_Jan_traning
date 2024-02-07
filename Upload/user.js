const mongoose = require('mongoose');
const uploadSchema = new mongoose.Schema({
    originalname: String
});
module.exports = mongoose.model("uploads",uploadSchema)