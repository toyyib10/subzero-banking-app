import Carousel from "../components/sign/Carousel";
import SigninComponent from "../components/sign/Signin.component";
import {useState} from "react"
import axios from "axios"

const Signup = () => {
  const style = {
    height: "90%",
  }
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")
  const signIn = (e) => {
    e.preventDefault()
    const endPoint = "http://localhost:5000/signin"
    axios.post(endPoint, {email,password}).then((result) => {
      console.log(result)
    })
  }
  return (
    <>
      <center className="pt-5 h-100">
        <div className="d-flex bg-white flex-wrap shadow col-md-9 col-10 bg-white p-0" style={style}>
          <Carousel/>
          <SigninComponent setemail={setemail} setpassword={setpassword} signIn={signIn}/>
        </div>
      </center>
    </>
  )
}

export default Signup;
