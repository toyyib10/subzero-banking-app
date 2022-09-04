const historyModel = require("../models/History.model")
const getHistory =  (req, res) => {
  res.send({})
}

const postHistory = (req, res) => {
  let eMail = req.body.email
  let status = req.body.status
  historyModel.find({email : eMail },(err, result) => {
    if (err) {
      
    } else {
      if (status) {
        let reversedHistory = result.reverse()
        let slicedHistory = reversedHistory.slice(0,1)
        res.send(slicedHistory)
      } else {
        let reversedHistory = result.reverse()
        res.send(reversedHistory)
      }
    }
  })
}

module.exports = {getHistory, postHistory}