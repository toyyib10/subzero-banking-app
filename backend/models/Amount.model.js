const mongoose = require("mongoose")

const amountSchema = mongoose.Schema({
  email : String,
  balance : String,
  spent : String,
  saved : String
})
const amountModel = mongoose.model("amount_tb", amountSchema)
module.exports = amountModel;