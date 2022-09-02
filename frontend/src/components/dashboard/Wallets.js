import Input from "../sign/Input"
import Button from "../Button"

const Wallets = () => {
  const style = {
    height : "32em"
  }
  const over = {
    overflowY : "auto"
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
              <Input name={"Give your savings a name"}/>
            </div>
            <div className="mt-2">
              <h4>Total amount to save</h4>
              <Input name={"Amount saved for your duration"} type={"number"}/>
            </div>
            <div className="mt-3 col-lg-5 col-md-9 col-7 fs-5">
              <div className="alert alert-warning d-flex align-items-center">
                <span>Balance</span> : <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg> <span>10000</span>
              </div> 
            </div>
            <div>
              <Button todo={"Confirm Plan"}/>
            </div>
          </div>

          {/* other */}
          <div className="col-lg-6 col-md-6 col-12 h-100 px-3" style={over}>
            <ul type="none" className="w-100 p-0 h-50 ">
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallets;
