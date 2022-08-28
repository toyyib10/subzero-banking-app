const express = require("express")
const router = express.Router()
const userModel = require("../models/userInfo.model")
require("dotenv").config()
const cloudinary = require("cloudinary")

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

router.get("/",(req, res) => {
  res.send({

  })
  console.log(req.body)
})
router.post("/",(req,res) => {
  let dataImage = req.body.image;
  cloudinary.v2.uploader.upload(dataImage, (error, result) => {
  }).then((result) => {
    image = result.secure_url
    let pin = req.body.confirmpin 
    let id =  req.body.id
    userModel.findOneAndUpdate({_id : id}, {image,pin}, (err,result) => {
      res.send(result)
    })
  })
})

module.exports = router;