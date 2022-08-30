const express = require("express")
const router = express.Router()
const UploadFiles = require("./Upload.route")
const Sendmoney = require("./Sendmoney.route")
const {getDashboard, postDashboard, getTransactionAmount, postTransactionAmount, getUserAndAmount, postUserAndAmount} = require("../controllers/Dashboard.controllers")

router.use("/upload", UploadFiles)
router.use("/sendmoney", Sendmoney)
router.get("/transaction", getTransactionAmount)
router.post("/transaction", postTransactionAmount)
router.get('/main', getDashboard)
router.post('/main', postDashboard)

router.get("/getAll", getUserAndAmount)
router.post("/getAll", postUserAndAmount)

module.exports = router;