import React from 'react'

const Money = ({component , col , colBg, col2 ,col3 , text , amount}) => {
  const style = {
    color : "rgb(172, 171, 171)"
  }
  return (
    <>
      <div className="col-md-3 h-100 ps-2 rounded-1 shadow" style={component}>
        <div className="d-flex justify-content-between w-100 px-2 pt-2">
          <div className="rounded-circle mt-3" style={colBg}>
            <svg className="p-1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill={col} d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
          </div>
          <div>
            <svg className="pt-2 pe-2" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 23 24"><path fill={col2} d="M12 5.217a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zm8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zm-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zM12 14.608a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zm8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zm-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zM12 23.999a2.608 2.608 0 1 1 0-5.216A2.608 2.608 0 0 1 12 24zm8.609 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216zm-18 0a2.608 2.608 0 1 1 0-5.216a2.608 2.608 0 0 1 0 5.216z"/></svg>
          </div>
        </div>
        <div className="mt-2 px-2">
          <p className="m-0" style={style}>
            {text}
          </p>
          <p className="fs-4" style={col3}>
            <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={col2} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7.052a1.05 1.05 0 0 1 1.968-.51l6.064 10.916a1.05 1.05 0 0 0 1.968-.51V6M5 10h14M5 14h14"/></svg>
            {amount}
          </p>
        </div>
      </div>
    </>
  )
}

export default Money;
