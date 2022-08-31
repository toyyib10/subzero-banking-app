const userModel = require("../models/userInfo.model")
const getSignin = (req,res) => {
  res.send("")
}
const postSignin = (req,res) => {
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  userModel.findOne({email : userEmail , password : userPassword}, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if (result == null){

      } else {
        console.log(result)
        res.send(result)
      }
    }
  })
}
module.exports = {getSignin,postSignin};