import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Dashboard from './starters/Dashboard';
import Signin from './starters/Signin';
import Signup from './starters/Signup';
import NotFound from './starters/NotFound';
import {Routes ,Route ,Navigate, useNavigate} from 'react-router-dom';
import axios from "axios"
import {useState} from "react"

const App = () => {
  const navigate = useNavigate()
  const [userinfo,setuserinfo] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const signIn = (e) => {
    e.preventDefault()
    const endPoint = "/signin"
    const transactionPoint = "/dashboard/transaction"
    axios.post(endPoint, {email,password}).then((result) => {
        if (result === "") {

        } else {
          if (result.data){
            axios.post(transactionPoint, {email}).then((transaction) => {
              if (transaction === "") {

              } else {
                if (transaction.data){
                  setuserinfo(result.data);
                  if (result.data.image  === ""){
                    sessionStorage.email = result.data.email
                    navigate("/dashboard/completevr")
                  } else {
                    sessionStorage.email = result.data.email
                    console.log(userinfo.image)
                    navigate("/dashboard")
                  }
                  
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
        <Route path="/dashboard/*" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Navigate to="/signup"/>}/>
        <Route path="/signin" element={<Signin signIn = {signIn} setemail = {setemail} setpassword = {setpassword}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;

