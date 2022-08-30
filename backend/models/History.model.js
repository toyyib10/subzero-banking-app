const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  email : String,
  date : String,
  color : String,
  amount : String,
  type : String,
  phonenumber : String,
  nameofsender : String,
  title : String
})