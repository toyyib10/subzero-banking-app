const  userModel = require("../models/userInfo.model") 
const mongoose = require("mongoose");

const getSignup = (req,res) => {
  res.send("")

} 
const postSignup = (req, res) => {
  let userDetails = req.body;
  let form = new userModel(userDetails)
  form.save((err) => {
    if (err){
      if (err.code === 11000){
        res.send({message : "Email already exists"})
      } else {
        res.send({message : "Please try again"})
      }
    } else {
      res.send({message : "registration successful"})
    }
  })
}
const loadPage =  () => {
  console.log("Back End started working")
}
const mongodbConnect = (err) => {
  if (err) {
    console.log("Unable to connect")
  } else {
    console.log("connection successful")
  }
}
module.exports = {getSignup ,loadPage ,mongodbConnect , postSignup}