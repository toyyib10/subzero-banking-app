import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import {Routes , Route, useNavigate} from 'react-router-dom'
import Main from "../components/dashboard/Main";
import SendMoney from "../components/dashboard/SendMoney";
import AddMoney from "../components/dashboard/AddMoney";
import Completevr from "../components/dashboard/Completevr";
import HistoryReport from "../components/dashboard/History";
import DashboardAction from "../components/dashboard/DashboardAction";
import {useState, useEffect} from "react"
import axios from "axios";
import NotFound from "../starters/NotFound"
import Wallets from "../components/dashboard/Wallets";


const Dashboard = () => {
  const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [newpin, setnewpin] = useState("")
  const [confirmpin, setconfirmpin] = useState("")
  const [email, setemail] = useState("")
  const [userinfo, setuserinfo] = useState({})
  const [amount, setamount] = useState({})
  const [history, sethistory] = useState([])
  
  useEffect(() => {
    setemail(sessionStorage.email);   
    const loadHistory = async () => {
      const historyPoint = "http://localhost:5000/dashboard/history"
      await axios.post(historyPoint, {email, status:true}).then((result) => {
        sethistory(result.data)
        console.log(history)
      })
    }   
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
    loadData()   
    loadAmount() 
    loadHistory() 
  }, [email])

  const submit = () => {
    if (image === "" || newpin === "" || confirmpin === ""){
    } else {
      if (newpin !== confirmpin){
      } else {
        const endPoint = "/dashboard/upload";
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
          <main className="col-md-9 p-0 px-1 ms-sm-auto col-lg-10 px-md-1">  
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/completevr" element={<Completevr userinfo={userinfo} submit={submit} setimage={setimage} setnewpin={setnewpin} setconfirmpin={setconfirmpin}/>}/>
              <Route />
              <Route path="/addmoney" element={<AddMoney result={userinfo}/>}/>
              <Route path="/sendmoney" element = {<SendMoney/>}/>
              <Route path="/quickactions" element={<DashboardAction/>}/>
              <Route path="/wallets" element={<Wallets/>}/>
              <Route path="/history" element={<HistoryReport userinfo={userinfo}/>}/>
              <Route path="/profile"/>
              <Route path="/notification"/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>

          </main>       
        </div>
      </div>
    </>
  )
}

export default Dashboard;
