const userModel = require("../models/userInfo.model")
const getSignin = (req,res) => {
  res.send("")
}
const postSignin = (req,res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  userModel.findOne({email : userEmail , password : userPassword}, (err, result) => {
    if (err) {
      // res.send("")
    } else {
      if (result == null){

      } else {
        res.send(result)
      }
    }
  })
}
module.exports = {getSignin,postSignin};