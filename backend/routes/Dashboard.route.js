const express = require("express")
const router = express.Router()
const UploadFiles = require("./Upload.route")
const {getDashboard, postDashboard, getTransactionAmount, postTransactionAmount} = require("../controllers/Dashboard.controllers")

router.use("/upload", UploadFiles)
router.get("/transaction", getTransactionAmount)
router.post("/transaction", postTransactionAmount)
router.get('/main', getDashboard)
router.post('/main', postDashboard)
module.exports = router;