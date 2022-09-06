import Input from "../sign/Input"
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Wallets = ({userinfo}) => {
  const navigate = useNavigate()
  const style = {
    height : "32em"
  }
  const over = {
    overflowY : "auto"
  }

  const [email, setemail] = useState("")  
  const [pin, setpin] = useState("")
  const [savingsname, setsavingsname] = useState("")
  const [savingsamount, setsavingsamount] = useState("")
  const [wallets, setwallets] = useState("")
  const [check, setcheck] = useState("")
  const [balance, setbalance] = useState("")

  const displayWallet = () => {
    const endPoint = "/dashboard/wallet/display"
    let data = {email};
    axios.post(endPoint, data).then((result) => {
      setwallets(result.data) 
    })
  }

  const deleteWallet = (id) => {
    const endPoint = "/dashboard/wallet/delete";
    axios.post(endPoint, {id, email}).then((result) => {
      setcheck(result.data)
    })
  }

  const loadAmount = () => {
    const transactionPoint = "/dashboard/transaction"
    axios.post(transactionPoint, {email}).then((transaction) => {
      if (transaction === "") {

      } else {
        if (transaction.data){
          setbalance(transaction.data.balance)
        }
      }
    })
  }

  useEffect(() => {
    setemail(sessionStorage.email)
    displayWallet()
    loadAmount()
  }, [email, check])

  const sendWallet = () => {
    
    if (savingsname === "" || pin === "" || savingsamount === ""){
      alert("Please fill all information")
    } else {
      if (pin === userinfo.pin){
        if (Number(savingsamount) > Number(balance)){
          alert("Insufficient balance")
        } else {
          let data = {savingsname, savingsamount, email}
          const endPoint = "/dashboard/wallet/"
          axios.post(endPoint,data).then((result) => {
            console.log(result.data)
            navigate("/dashboard")
          })
        }
      } else {
        alert("Incorrect Pin")
      }
      
    }
  }

  return (
    <>
       <div className="w-100 p-3 h-100">
        <div className="bg-white shadow p-md-3 rounded-1 d-flex flex-wrap" style={style}>
          <div className="col-lg-6 col-md-6 col-12 px-3  d-flex flex-column align-content-center justify-content-center">
            <h1 className="m-0">Fixed Savings</h1>
            <p>Lock up a specific amount of money for a fixed period of time.</p>
            <div className="mt-2">
              <h4>Savings Title</h4>
              <Input name={"Give your savings a name"} setvalue={setsavingsname}/>
            </div>
            <div className="mt-2">
              <h4>Total amount to save</h4>
              <Input name={"Amount saved for your duration"} type={"number"} setvalue={setsavingsamount}/>
            </div>
            <div className="mt-3 col-lg-5 col-md-9 col-7 fs-5">
              <div className="alert alert-warning d-flex align-items-center">
                <span>Balance</span> : <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg> <span>{balance}</span>
              </div> 
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-lg text-white btn-light" data-bs-toggle="modal" data-bs-target="#exampleModalDefault" style={{backgroundColor:"rgb(172, 255, 47)"}}>
                Add wallet
              </button>
            </div>
          </div>

          {/* other */}
          <div className="col-lg-6 col-md-6 col-12 h-100 ps-3" style={over}>
            <ul type="none" className="w-100 p-0 h-50 ">
              {wallets? wallets.map((item) => (
                <li className="d-flex align-items-center justify-content-center mb-3">
                <div className="bg-dark col-10 col-lg-9 rounded-4">
                  <div className="d-flex justify-content-between mt-2 mx-3">
                    <h3 className="text-white mt-2 m-0">{item.name}</h3>
                    <button className="btn  text-white pb-2" onClick={() => deleteWallet(item._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"/></svg>
                    </button>
                  </div>
                  <div className="d-flex justify-content-between mb-2 mx-3 mt-4">
                    <h2 className="text-white m-0">
                      <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                      {item.amount}
                    </h2>
                    <h4 className="text-white mt-1">{item.date}</h4>
                  </div>
                </div>
              </li>
              )): <div>
                No wallet Available
              </div>}
            </ul>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalDefault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <Input name={"Pin"} type={"number"} setvalue={setpin}/>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <button type="button" class="btn btn-lg text-white" onClick={sendWallet} style={{backgroundColor:"rgb(172, 255, 47)"}}>Confirm Pin</button>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Wallets;
