const mongoose = require("mongoose")
require("dotenv").config()
const cloudinary = require("cloudinary")
const userModel = require("../models/userInfo.model")
const amountModel = require("../models/Amount.model")

const postCompleteVr = (req,res) => {
  let dataImage = req.body.image;
  cloudinary.v2.uploader.upload(dataImage, (err, result) => {
    console.log(result)
    console.log(err)
  }).then((result) => {
    let image = result.secure_url;
    let pin = req.body.confirmpin;
    let id =  req.body.id;
    userModel.findOneAndUpdate({_id : id}, {image,pin}, (err,result) => {
      if (err) {
        res.send(err)
        console.log(err + "d")
      } else {
        console.log(result + "t")
        res.send(result)
      }
    })
  })
}
const getCompleteVr = (req, res) => {
  res.send({
    f :"fififif"
  })
}

const getDashboard = (req, res) => {
  res.send({})
}
const postDashboard = (req, res) => {
  let amount = new amountModel(req.body)
  amount.save((err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

const getTransactionAmount = (req, res) => {
  res.send("/")
}
const postTransactionAmount = (req, res) => {
  let eMail = req.body.email;
  amountModel.findOne({email : eMail}, (err, result) => {
    if (err) {
      console.log("unable amout")
    } else {
      res.send(result)
    }
  })
}

module.exports = {postCompleteVr,getCompleteVr, getDashboard, postDashboard, getTransactionAmount, postTransactionAmount};