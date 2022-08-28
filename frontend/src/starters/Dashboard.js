import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import {Routes , Route, useNavigate} from 'react-router-dom'
import Main from "../components/dashboard/Main";
import SendMoney from "../components/dashboard/SendMoney";
import Completevr from "../components/dashboard/Completevr";
import {useState} from "react"
import axios from "axios"

const Dashboard = ({userinfo ,setuserinfo, amount}) => {
  const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [newpin, setnewpin] = useState("")
  const [confirmpin, setconfirmpin] = useState("")
  const [id, setid] = useState("")
  const submit = () => {
    setid(userinfo._id)
    if (image === "" || newpin === "" || confirmpin === ""){
    } else {
      if (newpin !== confirmpin){
        console.log("ddddj") 
      } else {
        const endPoint = "http://localhost:5000/dashboard/upload";
        let userDetails = {image, confirmpin, id};
        axios.post(endPoint,userDetails).then((response)=>{
          setuserinfo(response.data)
          console.log(response)
          // navigate("/signin")
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
            {/* {userinfo.image?<Route path="/" element={<Main result={userinfo}/>}/>:<Route path="/" element={<Completevr userinfo={userinfo} submit={submit} setimage={setimage} setnewpin={setnewpin} setconfirmpin={setconfirmpin} setid={setid}/>}/> } */}
            <Route path="/" element={<Main result={userinfo} amount= {amount}/>}/>
            <Route />
            <Route path="/addmoney"/>
            <Route path="/sendmoney" element = {<SendMoney amount = {amount}/>}/>
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
