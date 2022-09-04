import React ,{useEffect, useState} from 'react'
import axios from "axios"
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from "chart.js";
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  ArcElement, 
  Title, 
  Tooltip, 
  Legend
)

const HistoryReport = ({userinfo}) => {
  const style = {
    height : "32em"
  }
  const over = {
    overflow : "auto"
  }

  const [email, setemail] = useState("")
  const [history, sethistory] = useState([])
  const [balance, setbalance] = useState("")
  const [spent, setspent] = useState("")
  const [saved, setsaved] = useState("")
  const loadAmount = () => {
    const transactionPoint = "http://localhost:5000/dashboard/transaction"
    axios.post(transactionPoint, {email}).then((transaction) => {
      if (transaction === "") {

      } else {
        if (transaction.data){
          setbalance(transaction.data.balance)
          setspent(transaction.data.spent)
          setsaved(transaction.data.saved)
        }
      }
    })
  }
  
  const loadHistory = () => {
    const endPoint = "/dashboard/history"
    axios.post(endPoint,{email, status: false}).then((result) => {
        sethistory(result.data)
        console.log(result.data)
    })  
  }

  useEffect(() => {
    setemail(sessionStorage.email)
    
    loadHistory()
    loadAmount()
  }, [email])

  const color = {
    color : "green"
  }
  const color1 = {
    color : "red"
  }
 
  const [ChartData,setChartData] = useState({datasets : [],})
  const [ChartOptions,setChartOptions] = useState({})

  
  
  useEffect(()  => {
    setChartData({
      labels: ["Balance", "Spent", "Saved"],
      datasets: [
        {
          data: [Number(balance), Number(spent), Number(saved)],
          backgroundColor : [
            '#36B455',
            '#EF4A5B',
            '#F2773F'
          ],
          borderWidth : 0
        }
      ]
    });
    setChartOptions({
      responsive : true,
      plugins : {
        legend : {
          position : "bottom"
        },
        title: {
          display : true,
        }
      }
    })
  }, [balance])

  return (
    <>
      <div className="w-100 p-3 h-100">
        <div className="bg-white shadow p-md-3 rounded-1 d-flex flex-wrap" style={style}>
          <div className="col-lg-6 col-md-6 col-12" >
            <center>
              {balance? 
              <div className="w-100 d-flex justify-content-center" style={{height:"63%"}}>
                <center style={{marginTop: "-20px"}}>
                  <Doughnut options={ChartOptions} data={ChartData} height={430} width={400}/>
                </center>
              </div>
              : 
              <div className="h-100 w-100 d-flex align-content-center justify-content-center pt-lg-5">
                <h2 className="text-center mt-lg-5">No Information to display Chart</h2>
              </div>}
            </center> 
          </div>
          <div className="col-lg-6 col-md-6 col-12 h-100 px-3" style={over}>
            <ul type="none" className="w-100 p-0 h-50 ">
              {
                history.map((item) => (
                  <div>
                    <li className="bg-light w-100 p-2 d-flex justify-content-between my-2">
                      <div>
                        <h6 className="p-0 m-0">{item.title}</h6>
                        <p  className="p-0 m-0 mt-2">{item.name}</p>
                      </div>
                      {
                        item.type? 
                          (<div>
                            <h6 className="p-0 m-0" style={color}>
                              <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={item.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                              {item.amount}
                            </h6>
                            <p className="p-0 m-0" align="right" style={color}>{item.type}</p>
                          </div>)
                        :
                          (<div>
                            <h6 className="p-0 m-0" style={color1}>
                              <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={item.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                              {item.amount}
                            </h6>
                            <p className="p-0 m-0" align="right" style={color1}>Debit</p>
                          </div>)
                      }
                    </li>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryReport;
