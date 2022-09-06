import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement} from "chart.js";
import axios from "axios"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  ArcElement, 
  Title, 
  Tooltip, 
  Legend
)


const TransactionReview = ({history}) => {

  const [ChartData,setChartData] = useState({datasets : [],})
  const [ChartOptions,setChartOptions] = useState({})
  const [balance, setbalance] = useState("")
  const [spent, setspent] = useState("")
  const [saved, setsaved] = useState("")
  const [email, setemail] = useState("")
  
  const loadAmount = () => {
    const transactionPoint = "/dashboard/transaction"
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

  useEffect(() => {
    setemail(sessionStorage.email);           
    loadAmount()
    setChartData({
      labels: ["Balance", "Spent", "Saved"],
      datasets: [
        {
          data: [balance, spent, saved],
          backgroundColor : [
            '#36B455',
            '#EF4A5B',
            '#F2773F'
          ],
          borderWidth : 0
        }
      ],
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
  }, [email, balance])


  const style = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  const color = {
    color : "green"
  }
  const color1 = {
    color : "red"
  }
  return (
    <>
      <div className="bg-white h-100 w-100 rounded-1 shadow mt-4 mt-md-0 p-2 pb-0 pe-3">
        <div className="w-100 d-flex justify-content-center" style={{height:"63%"}}>
          <center style={{marginTop: "-20px"}}>
          {balance? <Doughnut options={ChartOptions} data={ChartData} height={230} width={230}/> : <div className="mt-5">
              <h2>No information to display chart</h2>
            </div>}
            
          </center>
        </div>
        <div  className="w-100">
          <div className="d-flex justify-content-between">
            <p className="fs-4">Recent History</p>
            <Link to="/dashboard/history" style={style} className="mt-2">View all</Link>
          </div>
          <div className="w-100">
            <ul type="none" className="w-100 p-0">
             {
               history.map((item) => (
                <div>
                  <li className="bg-light w-100 d-flex justify-content-between px-2">
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

export default TransactionReview;
