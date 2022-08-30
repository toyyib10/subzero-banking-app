const express = require("express")
const router = express.Router()
const historyModel = require("../models/History.model")
const {getHistory, postHistory} = require("../controllers/History.controllers")

router.get("/history",getHistory)
router.post("/history",postHistory)

module.exports = router;