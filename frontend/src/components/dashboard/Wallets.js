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
          <div className="col-lg-6 col-md-6 col-12 h-100 ps-3" style={over}>
            <ul type="none" className="w-100 p-0 h-50 ">
              <li className="d-flex align-items-center justify-content-center mb-3">
                <div className="bg-dark col-10 col-lg-9 rounded-4">
                  <div className="d-flex justify-content-between mt-2 mx-3">
                    <h3 className="text-white">Name</h3>
                    <button className="btn  text-white">
                      DELETE
                    </button>
                  </div>
                  <div className="d-flex justify-content-between mb-2 mx-3 mt-4">
                    <h2 className="text-white m-0"># 1000000</h2>
                    <h3 className="text-white m-0">12/03/2023</h3>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center justify-content-center mb-3">
                <div className="bg-dark col-10 col-lg-9 rounded-4">
                  <div className="d-flex justify-content-between mt-2 mx-3">
                    <h3 className="text-white">Name</h3>
                    <button className="btn  text-white">
                      DELETE
                    </button>
                  </div>
                  <div className="d-flex justify-content-between mb-2 mx-3 mt-4">
                    <h2 className="text-white m-0"># 1000000</h2>
                    <h3 className="text-white m-0">12/03/2023</h3>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center justify-content-center mb-3">
                <div className="bg-dark col-10 col-lg-9 rounded-4">
                  <div className="d-flex justify-content-between mt-2 mx-3">
                    <h3 className="text-white">Name</h3>
                    <button className="btn  text-white">
                      DELETE
                    </button>
                  </div>
                  <div className="d-flex justify-content-between mb-2 mx-3 mt-4">
                    <h2 className="text-white m-0"># 1000000</h2>
                    <h3 className="text-white m-0">12/03/2023</h3>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center justify-content-center mb-3">
                <div className="bg-dark col-10 col-lg-9 rounded-4">
                  <div className="d-flex justify-content-between mt-2 mx-3">
                    <h3 className="text-white">Name</h3>
                    <button className="btn  text-white">
                      DELETE
                    </button>
                  </div>
                  <div className="d-flex justify-content-between mb-2 mx-3 mt-4">
                    <h2 className="text-white m-0"># 1000000</h2>
                    <h3 className="text-white m-0">12/03/2023</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wallets;
