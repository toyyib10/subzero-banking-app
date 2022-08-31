import React from 'react'

const HistoryList = ({title,name,amount,textColor,type}) => {
  const color = {
    color : textColor
  }
  return (
    <>
    <li className="bg-light w-100 p-2 d-flex justify-content-between my-2">
      <div>
        <h6 className="p-0 m-0">{title}</h6>
        <p  className="p-0 m-0 mt-2">{name}</p>
      </div>
      <div>
        <h6 className="p-0 m-0" style={color}>
          <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={textColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
          {amount}
        </h6>
        <p className="p-0 m-0" align="right" style={color}>{type}</p>
      </div>
    </li>
    </>
  )
}

export default HistoryList;

