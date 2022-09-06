const express = require("express")
const router = express.Router()
const {getWallet, postWallet, postWalletDelete, displayWallet} = require("../controllers/Wallets.controllers")


router.get("/",getWallet)
router.post("/", postWallet)  

router.post("/display",displayWallet)

router.post("/delete", postWalletDelete)

module.exports = router;