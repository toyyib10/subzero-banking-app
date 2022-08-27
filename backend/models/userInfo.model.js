const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  firstname : String,
  lastname : String,
  email : {type:String, unique:true},
  phonenumber : String,
  password : String,
  pin : String,
  image : String,
})
const userModel = mongoose.model("userInfo_tb", userSchema)
module.exports = userModel;