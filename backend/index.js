const express = require("express");
const app = express()

// app.use(url)
app.get("/", (req,res) => {
  res.send("hello world")
})
app.listen(5000, () => {
  console.log("Back End started working")
})