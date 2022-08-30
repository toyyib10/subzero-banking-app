const getHistory =  (req, res) => {
  res.send({})
}

const postHistory = (req, res) => {
  let eMail = req.body.email
  historyModel.find({email : eMail },(err, result) => {
    if (err) {
  
    } else {
      res.send(result)
    }
  })
}

module.exports = {getHistory, postHistory}