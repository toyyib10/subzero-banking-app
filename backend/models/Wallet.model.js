const mongoose = require("mongoose")

const walletSchema = mongoose.Schema({
  email : String,
  date : String,
  amount : String,
  name : String,
})

let walletModel = mongoose.model("wallet_tbs", walletSchema)

module.exports = walletModel;