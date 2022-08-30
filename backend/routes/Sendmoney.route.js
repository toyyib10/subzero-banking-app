const express = require("express")
const router = express.Router()
const {postMoney, getMoney} = require("../controllers/Sendmoney.controllers")
router.get("/",getMoney)

router.post("/", postMoney)

module.exports = router;