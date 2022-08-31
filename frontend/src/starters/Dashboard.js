import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import {Routes , Route, useNavigate} from 'react-router-dom'
import Main from "../components/dashboard/Main";
import SendMoney from "../components/dashboard/SendMoney";
import AddMoney from "../components/dashboard/AddMoney";
import Completevr from "../components/dashboard/Completevr";
import {useState, useEffect} from "react"
import axios from "axios"


const Dashboard = () => {
  const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [newpin, setnewpin] = useState("")
  const [confirmpin, setconfirmpin] = useState("")
  const [email, setemail] = useState("")
  const [userinfo, setuserinfo] = useState("")
  const [amount, setamount] = useState("")
  const [history, sethistory] = useState("")
  const loadData = () => {
    const getPoint =  "http://localhost:5000/dashboard/getAll"
    
    
    axios.post(getPoint, {email}).then((result) => {
      if (result === "") {

      } else {
        if (result.data){
          setuserinfo(result.data)
        } else {
        
      }
      
      }
    })

    
  }
  const loadAmount = () => {
    const transactionPoint = "http://localhost:5000/dashboard/transaction"
    axios.post(transactionPoint, {email}).then((transaction) => {
      if (transaction === "") {

      } else {
        if (transaction.data){
          setamount(transaction.data)
        }
      }
    })
  }
  const loadHistory = () => {
    const historyPoint = "http://localhost:5000/dashboard/history"
    axios.post(historyPoint, {email}).then((result) => {
      if (result === "") {

      } else {
        if (result.data){
          sethistory(result.data)
        }
      }
    })
  }

  useEffect(() => {
    setemail(localStorage.email);           
    loadData()   
    loadAmount() 
    loadHistory() 
  }, [email])

  const submit = () => {
    if (image === "" || newpin === "" || confirmpin === ""){
    } else {
      if (newpin !== confirmpin){
      } else {
        const endPoint = "http://localhost:5000/dashboard/upload";
        let userDetails = {image, confirmpin, email};
        axios.post(endPoint,userDetails).then((response)=>{
          setuserinfo(response.data)
          if (response.data) {
            navigate("/dashboard")
          } else {
            console.log("he no work")
          }
        })
      }
    }
  }
  return (
    <>
    <Header result={userinfo}/>
   

    <div className="container-fluid">
      <div className="row">  
        <SideBar/>     
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-1">  
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/completevr" element={<Completevr userinfo={userinfo} submit={submit} setimage={setimage} setnewpin={setnewpin} setconfirmpin={setconfirmpin}/>}/>
            <Route />
            <Route path="/addmoney" element={<AddMoney result={userinfo}/>}/>
            <Route path="/sendmoney" element = {<SendMoney/>}/>
            <Route path="/quickactions"/>
            <Route path="/wallets"/>
            <Route path="/history"/>
            <Route path="/profile"/>
            <Route path="/notification"/>
          </Routes>
        </main>       
      </div>
    </div>
    </>
  )
}

export default Dashboard;
