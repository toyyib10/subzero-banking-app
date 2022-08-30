const express = require("express")
const router = express.Router()
const amountModel = require("../models/Amount.model")
const userModel = require("../models/userInfo.model")
const historyModel = require("../models/History.model")
const postSendmoney = require("../models/History.model")

const getMoney = (req, res) => {
  res.send({})
}

const postMoney = (req,res) => {
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
                      type : "Credit",
                      balance,
                      name : e_mail,
                      title : "Money Received"
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
                              name : userName,
                              title : "Money Sent"
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
}

module.exports = {postMoney, getMoney}