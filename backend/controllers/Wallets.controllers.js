const walletModel = require("../models/Wallet.model")

const getWallet =  (req, res) => {
  res.send({})
}

const postWallet = (req, res) => {
  console.log(req.body)
}

const getWalletDelete = (req, res) => {
  res.send({})
  console.log("he don work")
}



module.exports = {getWallet, postWallet, getWalletDelete};