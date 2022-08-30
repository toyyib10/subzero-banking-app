const express = require("express")
const router = express.Router()
const amountModel = require("../models/Amount.model")
const userModel = require("../models/userInfo.model")
const historyModel = require("../models/History.model")
router.get("/",(req, res) => {
  res.send({})
})

router.post("/", (req,res) => {
  let e_mail = req.body.email
  let transferAmount = req.body.transferamount
  let userName = req.body.username
  amountModel.findOne({email : e_mail}, (err, result) => {
    if (err) {

    } else {
      let oldBalance = result.balance;
      let oldSpent = result.spent
      let balance1 = Number(oldBalance) - Number(transferAmount)
      if (balance > 0) {
        userModel.findOne({username : userName},(err, result) => {
          if (err) {
  
          } else {
            let eMail = result.email
            amountModel.findOne({email : eMail},(err, result) => {
              if (err) {
  
              } else {
                let sendoldBalance = Number(result.balance) + Number(transferAmount);
                let spent = Number(transferAmount) + Number(oldSpent)
                balance = String(sendoldBalance)
                spent = String(spent)
                amountModel.findOneAndUpdate({email : eMail} , {balance}, (err, result) => {
                  if (err) {
  
                  } else {
                    let receiverHistory = {
                      email : eMail,
                      date : "",
                      color : "green",
                      amount : transferAmount,
                      type : "credit",
                      balance,
                      phonenumber : "",
                      nameofsender : e_mail,
                      title : "Money received"
                    }
                    let receiverForm = new historyModel(receiverHistory)
                    receiverForm.save((err, result) => {
                      if (err){

                      } else {
                        balance = String(balance1)
                        amountModel.findOneAndUpdate({email : e_mail}, {balance, spent}, (err , result) => {
                          if (err) {
      
                          } else {
                            let senderHistory = {
                              email : e_mail,
                              date : "",
                              color : "red",
                              amount : transferAmount,
                              type : "debit",
                              balance,
                              phonenumber : "",
                              nameofsender : userName,
                              title : "Money sent"
                            }
                            senderFrom = new historyModel(senderHistory)
                            senderForm.save((err) => {
                              if (err){

                              } else {
                                let data = {result, balance}
                                res.send(data)
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
        })
      }
     
    }
  })
})

module.exports = router;