// import UserChart from "./Chart"
import {Link} from "react-router-dom"

const TransactionReview = ({history}) => {

  // const height = {
  //   height : "57%"
  // }
  const style = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  const color = {
    color : "green"
  }
  const color1 = {
    color : "red"
  }
  return (
    <>
      <div className="bg-white h-100 w-100 rounded-1 shadow mt-4 mt-md-0 p-2">
        {/* <div className="w-100" style={height}>
          <UserChart balance={balance} saved={saved} spent={spent}/>
        </div> */}
        <div  className="w-100 h-100">
          <div className="d-flex justify-content-between">
            <p className="fs-4">Recent History</p>
            <Link to="/dashboard/history" style={style} className="mt-2">View all</Link>
          </div>
          <div className="w-100">
            <ul type="none" className="w-100 p-0">
             {
               history.map((item) => (
                <div>
                  <li className="bg-light w-100 p-2 d-flex justify-content-between my-2">
                    <div>
                      <h6 className="p-0 m-0">{item.title}</h6>
                      <p  className="p-0 m-0 mt-2">{item.name}</p>
                    </div>
                    {
                      item.type? 
                        (<div>
                          <h6 className="p-0 m-0" style={color}>
                            <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={item.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                            {item.amount}
                          </h6>
                          <p className="p-0 m-0" align="right" style={color}>{item.type}</p>
                        </div>)
                      :
                        (<div>
                          <h6 className="p-0 m-0" style={color1}>
                            <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={item.color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
                            {item.amount}
                          </h6>
                          <p className="p-0 m-0" align="right" style={color1}>Debit</p>
                        </div>)
                    }
                  </li>
                </div>
               ))
             }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionReview;
