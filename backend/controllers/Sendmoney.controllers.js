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
  let currentDate = new Date()
  let e_mail = req.body.email
  let transferAmount = req.body.transferamount;
  let userName = req.body.username;
  amountModel.findOne({email : e_mail}, (err, result) => {
    if (err) {

    } else {
      let oldBalance = result.balance;
      let oldSpent = result.spent;
      let balance1 = Number(oldBalance) - Number(transferAmount)
      if (balance1 > 0) {
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
                    userModel.findOne({email : e_mail}, (err, result) => {
                      if (err) {

                      } else {
                        let senderName = result.username 
                        let receiverHistory = {
                          email : eMail,
                          date : currentDate,
                          color : "green",
                          amount : transferAmount,
                          type : "Credit",
                          balance,
                          name : senderName,
                          title : "Money Received"
                        }
                        let receiverForm = new historyModel(receiverHistory)
                        receiverForm.save((err, result) => {
                          if (err){
    
                          } else {

                            amountModel.findOneAndUpdate({email : e_mail}, {balance : String(balance1), spent}, (err , result) => {
                              if (err) {
          
                              } else {
                                let senderHistory = {
                                  email : e_mail,
                                  date : currentDate,
                                  color : "red",
                                  amount : transferAmount,
                                  type : "",
                                  balance : String(balance1),
                                  name : userName,
                                  title : "Money Sent"
                                }
                                senderForm = new historyModel(senderHistory)
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
        })
      }
     
    }
  })
}

module.exports = {postMoney, getMoney}