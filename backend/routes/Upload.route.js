const express = require("express")
const router = express.Router()
const userModel = require("../models/userInfo.model")
const cloudinary = require("cloudinary")
const {postCompleteVr, getCompleteVr} = require("../controllers/Dashboard.controllers")
require("dotenv").config()
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

router.get("/",getCompleteVr)
router.post("/",postCompleteVr)

module.exports = router;