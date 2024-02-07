const mongoose  = require('mongoose')
const StudentSchema = new mongoose.Schema({
    name : String,
    course : String
})

module.exports = mongoose.model("table1" , StudentSchema)