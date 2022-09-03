import React from 'react'
import Button from "../Button"

const AddMoney = ({result}) => {
  const addMoney = () => {

  }
  return (
    <>
      <div className="w-100 px-lg-4 pb-lg-4 px-2 pt-3 h-100">
        <div className="w-100 bg-white shadow h-100 p-4 rounded-1 p-4">
          <h1>Bank Transfer</h1>
          <p>Copy your username and send money to your generated account number easily and fast</p>
          <div className="d-flex justify-content-between align-items-center border-bottom mt-4">
            <h3>Bank Name</h3>
            <h3> Subzero Bank</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom mt-4">
            <h3>Account Username</h3>
            <h3>@ {result.username}</h3>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom mt-4">
            <h3>Account Name</h3>
            <h3>{result.firstname} {result.lastname}</h3>
          </div>
          <div className="mt-5">
            <Button sign ={addMoney} todo={"Share Details"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddMoney;
