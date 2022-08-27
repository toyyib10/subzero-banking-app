const userModel = require("../models/userInfo.model")
const getSignin = (req,res) => {
  console.log(req.body )
  res.send("")
}
const postSignin = (req,res) => {
  let {eMail,passoword} = req.body;
  userModel.findOne()
  res.send("success")
}
module.exports = {getSignin,postSignin}