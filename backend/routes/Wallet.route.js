const express = require("express")
const router = express.Router()
const {getWallet, postWallet, getWalletDelete} = require("../controllers/Wallets.controllers")


router.get("/",getWallet)

router.post("/", postWallet)  

router.get("/delete", getWalletDelete)
router.post("/delete", )

module.exports = router;