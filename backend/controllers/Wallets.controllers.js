const walletModel = require("../models/Wallet.model")
const amountModel = require("../models/Amount.model")
const historyModel = require("../models/History.model")

const getWallet =  (req, res) => {
  res.send({})
}

const postWallet = (req, res) => {
  let today = new Date()
  let date = today.toDateString();
  let email = req.body.email;
  let eMail = req.body.email;
  let amount = req.body.savingsamount;
  let name = req.body.savingsname;
  let wallet = {email, amount, name, date}
  let newWallet = new walletModel(wallet)
  amountModel.findOne({email : eMail}, (err, transaction) => {
    if (err){
      console.log(err)
    } else{
      let newBalance= Number(transaction.balance) - Number(amount);
      let newSaved = Number(transaction.saved) + Number(amount)
      amountModel.findOneAndUpdate({email: eMail}, {balance:String(newBalance), saved:String(newSaved)}, (err, result) => {
        if(err){
          console.log(err)
        } else {
          let history = {
            email : eMail,
            date,
            color : "red",
            amount : String(amount),
            type : "",
            balance : String(newBalance),
            name,
            title : "Money Saved"
          }
          let newHistory = new historyModel(history)
          newHistory.save((err, result) => {
            if (err){
              console.log(err)
            } else {
              newWallet.save((err,result) => {
                if (err){
                  console.log(err + "wal")
                  res.send(err)
                } else {
                  res.send(result)
                }
              })
            }
          })
        }
      })
    }
  })
}

const displayWallet = (req, res) => {
  let eMail = req.body.email
  let status = req.body.status
  walletModel.find({email : eMail}, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if (status) {
        let reversedWallet = result.reverse()
        let slicedWallet = reversedHistory.slice(0,2)
        res.send(slicedWallet)
      } else {
        let reversedWallet = result.reverse()
        res.send(reversedWallet)
      }
    }
  })
}

const postWalletDelete = (req, res) => {
    let today = new Date()
    let date = today.toDateString();
    walletModel.findOne({_id:req.body.id}, (err, wallet) => {
      if (err) {
      console.log(err)
    } else {
      let walletAmount = wallet.amount;
      let name = wallet.name
      amountModel.findOne({email:req.body.email}, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          let balance = Number(result.balance) + Number(walletAmount);
          let saved = Number(result.saved) - Number(walletAmount)
          amountModel.findOneAndUpdate({email:req.body.email}, {balance: String(balance), saved: String(saved)}, (err, result) => {
            if (err) {
              console.log(err)
            } else {
              let history = {
                email : req.body.email,
                date,
                color : "green",
                amount : String(walletAmount),
                type : "Credit",
                balance : String(balance),
                name,
                title : "Money Withdraw"
              }
              let newHistory = new historyModel(history)
              newHistory.save((err, result) => {
                if (err){
                  console.log(err)
                } else {
                  walletModel.deleteOne({_id:req.body.id}, (err, result) => {
                    if (err){
                      console.log(err)
                    } else {
                      res.send(result)
                      console.log(result)
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
  
}



module.exports = {getWallet, postWallet, postWalletDelete, displayWallet};