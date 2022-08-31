import {useEffect, useState} from 'react'
import axios from "axios"

const HistoryReport = () => {
  const style = {
    overflow : "auto",
  }
  const [email, setemail] = useState("")
  const [history, sethistory] = useState([])
  useEffect(() => {
    setemail(localStorage.email)
    const loadHistory = () => {
      const endPoint = "http://localhost:5000/dashboard/history"
      axios.post(endPoint,{email, status: false}).then((result) => {
          sethistory(result.data)
          console.log(history)
      })  
    }
    loadHistory()
  }, [])

 
  return (
    <>
      <div className="w-100 h-100 p-3">
        <div className="w-100 h-100 bg-white shadow p-3" style={style}>
        <table className="table table-striped">
          <thead className="position-sticky bg-white text-center">
            <tr >
              <th scope="col">Title</th>
              <th scope="col">Name / Phone</th>
              <th scope="col">Sender Name</th>
              <th scope="col">Amount</th>
              <th scope="col">New Balance</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {history.map((item) => (

                <tr>
                  <th scope="row">{item.title}</th>
                  <td>{item.name}</td>
                  <td>{item.amount}</td>
                  <td>{item.balance}</td>
                  <td>{item.type}</td>
                  <td>{item.date}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default HistoryReport;
