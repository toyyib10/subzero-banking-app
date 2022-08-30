import React from 'react'
import Money from "./Money";
import Phone from "./Phone";
import QuickActions from "./QuickActions";
import TransactionReview from "./TransactionReview";

const Main = ({result, amount}) => {
  const style = {
    height: "63%"
  }
  const other = {
    height : "40%"
  }
  const color = {
    color : "white",
    backgroundColor : "rgb(0,0,10,0.8)"
  }
  const color2 = {
    backgroundColor : "rgba(255,255,255,0.8)"
  }
  const colBg = {
    backgroundColor:'rgba(172, 255, 47, 0.2)'
  }
  const col ={
    backgroundColor:"rgba(172, 171, 171, 0.336)"
  }
  const design = {
    color : "white",
  }
  const design2 = {
    color : "black",
  }
  const merge = {
    marginTop : "20px"
  }
  const height = {
    height : "30%"
  }
  const style2 = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  const quick = {
    height : "60%"
  }
  let balance = amount.balance;
  let spent = amount.spent;
  let saved = amount.saved;
  return (
    <>
      <div className="w-100 d-flex flex-wrap px-md-4 px-2 pt-3" style={style}>
          <div className=" h-100 col-md-8 col-12 mb-md-0 mb-3">
            {/* MONEY */}
            <div className="bg-light w-100 d-md-flex justify-content-between align-items-center pe-md-3 pe-0 d-none " style={other}>
              <Money component={color} col = {"rgb(172, 255, 47)"} colBg = {colBg} col2={"white"} col3={design} text={"Account Balance"} amount={balance}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total Spent"} amount={spent}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total Saved"} amount={saved}/>
            </div>
            {/* PHONE */}
            <div className="w-100 h-50 d-md-none pb-2 pt-1 pe-0 d-flex justify-content-center shadow bg-dark rounded-1" style={other}>
              <Phone/>
            </div>
            {/* QUICK ACTIONS */}
            <div className="w-100 mt-md-0 pt-md-3 pe-md-3 pe-0" style={quick}>
              <QuickActions/>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-md-0" style={merge}>
            <TransactionReview balance = {balance} spent ={spent} saved ={saved}/>
          </div>
      </div>
      <div className="w-100 mt-3 px-4" style={height}>
        <div className="bg-white shadow w-100 h-100 rounded-1">
          <div className="d-flex w-100 justify-content-between px-4 pt-2">
            <p className="fs-4">Recent Wallet</p>
            <a href="/" className="mt-1" style={style2}>View all</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
