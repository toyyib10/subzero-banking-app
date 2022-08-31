import Input from "../sign/Input"
import {useState, useEffect} from "react"
import Button from "../Button"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const SendMoney = () => {
  const navigate = useNavigate()
  const [username, setusername] = useState("")
  const [transferamount, settransferamount] = useState("")
  const [pin , setpin] = useState("")
  const [check , setcheck] = useState(false)
  const [email, setemail] = useState("")
  const [userinfo, setuserinfo] = useState("")
  const [amount, setamount] = useState("")

  
  const loadData = () => {
    const endPoint =  "http://localhost:5000/dashboard/getAll"
    axios.post(endPoint, {email}).then((result) => {
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

  useEffect(() => {
    setemail(localStorage.email)
    loadData()
    loadAmount()
  }, [email]) 

  const sendMoney = () => { 
    if (transferamount !== "" && username !== ""){
      if (Number(amount.balance) > Number(transferamount)){
        setcheck(true)
        document.getElementById("exampleModal").style.display = "block";
      } else {
        alert("Insufficient Balance")
      }
    } else {
      alert("Fill the information")
    }
    
  }
  const closeModal = () => {
    document.getElementById("exampleModal").style.display = "none"
  }
  const send = () => {
    if (check) {
      let email = userinfo.email
      const endPoint = "http://localhost:5000/dashboard/sendmoney"
      axios.post(endPoint, {pin, username, transferamount, email}).then((result) => {
         if (result.data){
          navigate("/dashboard")  
         } else {
           console.log("he no work")
         }
        
        console.log('he no work')
      })
    }
  }
  const style = {
    display : "none"
  }
  
  return (
    <>
     <div className="w-100 px-lg-4 pb-lg-4 px-2 pt-3 h-100  ">
      <div className="w-100 bg-white shadow h-100 p-4 rounded-1">
        <h1>
          Subzero user
        </h1>
        <p>
          Easier payment system with just a subzero username, send funds in less than 30 seconds
        </p>
        <div  className="mt-4">
          <Input name={"Username"} setvalue={setusername}/>
        </div>
        <div className="mt-4">
          <Input name={"Amount"} setvalue={settransferamount}/>
        </div>
        <div className="mt-3 col-lg-3 col-md-4 col-10 fs-5">
          <div className="alert alert-warning d-flex align-items-center">
            <span>Balance</span> : <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg> <span>{amount.balance}</span>
          </div> 
        </div>
        <div className="mt-5 pt-2">
          <Button sign ={sendMoney} todo={"Send Money"}/>
        </div>
      </div>
     </div>
     <div class="modal" id="exampleModal" tabindex="-1" style={style}>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Pin</h5>
            <button type="button" className="btn btn-light" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <Input name={"Pin"} setvalue={setpin}/>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <Button sign ={send} todo={"Send"}/>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SendMoney;
