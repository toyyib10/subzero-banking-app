const express = require("express");
const app = express();
const dashboard = require("./routes/Dashboard.route")
const {getSignup,  loadPage, mongodbConnect ,postSignup} = require("./controllers/user.controller")
const {getSignin ,postSignin} = require("./controllers/userSignin.controller")
const mongoose = require("mongoose");
require("dotenv").config()
const URI = process.env.uri
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended:true},{limit: "100mb"}))
app.use(express.json({limit : "100mb"}))
app.use("/dashboard",dashboard)
mongoose.connect(URI, mongodbConnect)
app.get("/signup", getSignup)
app.post ("/signup" ,postSignup)
app.get("/signin", getSignin)
app.post("/signin", postSignin)

app.use(express.static("build"))
app.get("/*", (req,res) => {
  res.sendFile(`${__dirname}"/build/index.html"`)
})

const PORT = process.env.PORT;
app.listen(PORT, loadPage)