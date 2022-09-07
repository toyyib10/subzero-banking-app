import {useState, useEffect} from 'react'
import Money from "./Money";
import Phone from "./Phone";
import QuickActions from "./QuickActions";
import TransactionReview from "./TransactionReview";
import axios from "axios"
import {Link} from "react-router-dom"

const Main = () => {

  const style = {
    height: "63%"
  }
  const other = {
    height : "40%"
  }
  const color = {
    color : "white",
    backgroundColor : "rgb(0,0,10,0.8)"
  }
  const color2 = {
    backgroundColor : "rgba(255,255,255,0.8)"
  }
  const colBg = {
    backgroundColor:'rgba(172, 255, 47, 0.2)'
  }
  const col ={
    backgroundColor:"rgba(172, 171, 171, 0.336)"
  }
  const design = {
    color : "white",
  }
  const design2 = {
    color : "black",
  }
  const merge = {
    marginTop : "20px"
  }
  const height = {
    height : "30%"
  }
  const style2 = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  const quick = {
    height : "60%"
  }
  const [email, setemail] = useState("")
  const [amount, setamount] = useState("")
  const [history, sethistory] = useState([])
  const [balance, setbalance] = useState("")
  const [spent, setspent] = useState("")
  const [saved, setsaved] = useState("")
  const [wallet, setwallet] = useState("")
  

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
  const loadHistory = () => {
    const historyPoint = "/dashboard/history"
    axios.post(historyPoint, {email , status: true}).then((result) => {
      if (result === "") {

      } else {
        if (result.data){
          sethistory(result.data)
        }
      }
    })
  }
  const loadWallet = () => {
    const walletPoint = "/dashboard/history"
    axios.post(walletPoint, {email , status: true}).then((result) => {
      if (result === "") {

      } else {
        if (result.data){
          setwallet(result.data)
        }
      }
    })
  }

  const sec = {
    height : "35em"
  }

  useEffect(() => {
    setemail(sessionStorage.email);           
    loadAmount() 
    loadHistory() 
    loadWallet()
  }, [email])

  return (
    <section style={sec}>
      <div className="w-100 d-flex flex-wrap px-md-4 px-2 pt-3" style={style}>
          <div className=" h-100 col-md-8 col-12 mb-md-0 mb-3">
            {/* MONEY */}
            <div className="bg-light w-100 d-md-flex justify-content-between align-items-center pe-md-3 pe-0 d-none " style={other}>
              <Money component={color} col = {"rgb(172, 255, 47)"} colBg = {colBg} col2={"white"} col3={design} text={"Account Balance"} amount={balance}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total Spent"} amount={spent}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total Saved"} amount={saved}/>
            </div>
            {/* PHONE */}
            <div className="w-100 h-50 d-md-none pb-2 pt-1 pe-0 d-flex justify-content-center shadow bg-dark rounded-1" style={other}>
              <Phone/>
            </div>
            {/* QUICK ACTIONS */}
            <div className="w-100 mt-md-0 pt-md-3 pe-md-3 pe-0" style={quick}>
              <QuickActions/>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-md-0" style={merge}>
            <TransactionReview history={history} balance={balance} spent={spent} saved={saved}/>
          </div>
      </div>
      <div className="w-100 mt-3 px-4" style={height}>
        <div className="bg-white shadow w-100 pb-2 rounded-1">
          <div className="d-flex w-100 justify-content-between px-4 pt-1">
            <p className="fs-4">Recent Wallet</p>
            <Link to="/dashboard/wallets" className="mt-1" style={style2}>View all</Link>
          </div>
          <div>
            <ul type="none" className="d-flex justify-content-between flex-wrap">
              {
                wallet? wallet.map((item) => (
                  <li className="d-flex align-items-center col-6 pe-3 pe-sm-0">
                    <div className="bg-dark col-11 rounded-4">
                      <div className="d-flex justify-content-start mx-2">
                        <h3 className="text-white">{item.name}</h3>
                      </div>
                      <div className="d-flex justify-content-between mx-2">
                        <h3 className="text-white m-0">
                          <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                          {item.amount}
                        </h3>
                        <h4 className="text-white m-0">{item.date}</h4>
                      </div>
                    </div>
                  </li>
                )) : <div className="w-100 h-100 d-flex justify-content-center"><h3>No Wallet Available</h3></div>
              }
            </ul>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Main
