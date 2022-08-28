import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Dashboard from './starters/Dashboard';
import Signin from './starters/Signin';
import Signup from './starters/Signup';
import {Routes ,Route ,Navigate, useNavigate} from 'react-router-dom';
import axios from "axios"
import {useState} from "react"

const App = () => {
  const navigate =useNavigate()
  const [userinfo,setuserinfo] = useState("")
  const [amount,setamount] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const signIn = (e) => {
    e.preventDefault()
    const endPoint = "http://localhost:5000/signin"
    const transactionPoint = "http://localhost:5000/dashboard/transaction"
    axios.post(endPoint, {email,password}).then((result) => {
        if (result === "") {

        } else {
          if (result.data){
            axios.post(transactionPoint, {email}).then((transaction) => {
              if (transaction === "") {

              } else {
                if (transaction.data){
                  setuserinfo(result.data);
                  setamount(transaction.data);
                  navigate("/dashboard")
                }
              }
            })
          } else {
            
          }
          
        }
      })
      
  }
  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard userinfo={userinfo} setuserinfo ={setuserinfo} amount = {amount}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Navigate to="/signup"/>}/>
        <Route path="/signin" element={<Signin signIn = {signIn} setemail = {setemail} setpassword = {setpassword}/>}/>
      </Routes>
    </>
  )
}

export default App;

