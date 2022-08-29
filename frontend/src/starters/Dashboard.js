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
  useEffect(() => {
    setemail(localStorage.email)
    console.log(email)
  }, [])
  const submit = () => {
    let email = userinfo.email
    if (image === "" || newpin === "" || confirmpin === ""){
    } else {
      if (newpin !== confirmpin){
        console.log("ddddj") 
      } else {
        const endPoint = "http://localhost:5000/dashboard/upload";
        let userDetails = {image, confirmpin, email};
        axios.post(endPoint,userDetails).then((response)=>{
          console.log(userinfo.email)
          setuserinfo(response.data)
          console.log(response)
          if (response.data) {
            console.log(response.data)
          }
          navigate("/dashboard")
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
            <Route path="/" element={<Main result={userinfo} amount= {amount}/>}/>
            <Route path="/completevr" element={<Completevr userinfo={userinfo}submit={submit} setimage={setimage} setnewpin={setnewpin} setconfirmpin={setconfirmpin}/>}/>
            <Route />
            <Route path="/addmoney" element={<AddMoney result={userinfo}/>}/>
            <Route path="/sendmoney" element = {<SendMoney amount = {amount} result={userinfo}/>}/>
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
