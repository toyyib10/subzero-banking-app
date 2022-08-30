const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
  email : String,
  date : String,
  color : String,
  amount : String,
  type : String,
  balance : String,
  name : String,
  title : String
}) 

let historyModel = mongoose.model("history_tbs", historySchema)

module.exports = historyModel;