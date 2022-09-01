import Carousel from "../components/sign/Carousel";
import SignupComponent from "../components/sign/Signup.component";
import axios from 'axios';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const style = {
    height: "95%",
  }
  const navigate = useNavigate() 
  // const [message, setmessage] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState(""); 
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [pin, setpin] = useState("");
  const [image, setimage] = useState("");

  const signUp = (e) => {
    if (firstname === "" || lastname === "" || email === "" ||  username === "" || password === ""){
    } else {
      e.preventDefault()
      const endPoint = "/signup"
      let information = {firstname, lastname , email, username , password, pin, image}
      const amountEndPoint = "/dashboard/main"
      let amountTotal = {email, balance : "1000000", spent : "0", saved : "0"}
      axios.post(endPoint , information).then((result) => {
        axios.post(amountEndPoint, amountTotal).then((result) => {
          navigate("/signin")
        })
      }).catch((err)=>{
        console.log(err)
      })
      axios.get(endPoint).then((result) => {
        if(result === "Email already exists"){
          // setmessage(result.data.message)
        }
      })
    }
  }
  return (
    <>
      <center className="pt-5 h-100">
        <div className="d-flex bg-white flex-wrap shadow col-md-9 col-10 p-0" style={style}>
          <Carousel/>
          <SignupComponent  setfirstname={setfirstname} setlastname={setlastname} setemail={setemail} setusername={setusername} setpassword={setpassword} setpin={setpin} setimage={setimage} signUp={signUp} />
        </div>
      </center>
    </>
  )
}

export default Signup;
