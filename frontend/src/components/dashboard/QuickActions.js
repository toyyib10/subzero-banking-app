import React from 'react'
import Actions from './Actions';

const QuickActions = () => {
  const style = {
    width: "23%",
    height : "43%"
  }
  return (
    <>
      <div className="bg-white shadow w-100 h-100 p-1 pt-md-2  pt-3 d-flex flex-wrap rounded-1">
        <div className="m-md-1 me-1 ms-2 ms-md-3 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 ms-2 me-1 ms-md-3 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions/>
        </div>
        <div className="m-md-1 m-0" style={style}>
          <Actions/>
        </div>
      </div>
    </>
  )
}

export default QuickActions;
