const express = require("express")
const router = express.Router()
const UploadFiles = require("./Upload.route")

router.use("/upload", UploadFiles)
// router.get('/', (req, res) => {
  
// })
module.exports = router;