const express = require("express")
const router = express.Router()
const amountModel = require("../models/Amount.model")
const userModel = require("../models/userInfo.model")
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
      let balance = Number(oldBalance) - Number(transferAmount)
      if (balance > 0) {
        balance = String(balance)
        userModel.findOne({username : userName},(err, result) => {
          if (err) {
  
          } else {
            let eMail = result.email
            amountModel.findOne({email : eMail},(err, result) => {
              if (err) {
  
              } else {
                let sendoldBalance = Number(result.balance) + Number(transferAmount);
                sendoldBalance = String(sendoldBalance)
                amountModel.findOneAndUpdate({email : eMail} , {balance : sendoldBalance}, (err, result) => {
                  if (err) {
  
                  } else {
                    amountModel.findOneAndUpdate({email : e_mail}, {balance}, (err , result) => {
                      if (err) {
  
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
     
    }
  })
})

module.exports = router;