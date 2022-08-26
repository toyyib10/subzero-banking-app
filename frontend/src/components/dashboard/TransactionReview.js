import React from 'react'

const TransactionReview = () => {
  const height = {
    height : "57%"
  }
  const style = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  return (
    <>
      <div className="bg-white h-100 w-100 rounded-1 shadow mt-4 mt-md-0 p-2">
        <div className="w-100 bg-danger" style={height}>

        </div>
        <div  className="w-100">
          <div className="d-flex justify-content-between">
            <p className="fs-4">Recent History</p>
            <a href="/" style={style} className="mt-2">View all</a>
          </div>
          <div>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionReview;
