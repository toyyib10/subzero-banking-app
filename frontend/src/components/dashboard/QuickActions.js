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
          
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"/></svg>} name={"Airtime"} navigateTo = {"/dashboard/airtime"}/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/></svg>} name={"Data"} navigateTo = {"/dashboard/data"}/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"/></svg>} name={"Electricity"} navigateTo = {"/dashboard/electricity"}/>
        </div>
        <div className="m-md-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/></svg>} name={"Cable TV"} navigateTo = {"/dashboard/cabletv"}/>
        </div>
        <div className="m-md-1 ms-2 me-1 ms-md-3 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2s-2 .849-2 2s.848 2 2 2z"/><path fill="currentColor" d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14l-16-.011V6l16 .011V18z"/><path fill="currentColor" d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"/></svg>} name={"Card"} navigateTo = {"/dashboard/card"}/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.33em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="m400 96l-.9.66c-4.4-.44-9.7-.66-15.1-.66H256c-16.5 0-32.5 2.08-47.8 6c-.1-2-.2-3.98-.2-6c0-53.02 42.1-96 96-96c53 0 96 42.98 96 96zm-16 32c3.5 0 6.1.1 10.4.3c4.3.3 8.5.7 12.6 1.3c17.6-20.5 43.8-33.6 73-33.6h32l-18.8 75.1c15.9 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H256v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c-34.9-26.2-58.7-66.2-63.21-112H68c-37.56 0-68-30.4-68-68s30.44-68 68-68h4c13.25 0 24 10.7 24 24s-10.75 24-24 24h-4c-11.05 0-20 8.1-20 20c0 11 8.95 20 20 20h31.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 25.6-5.2 40.5-5.2h128zm40 112c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24z"/></svg>} name={"Savings"} navigateTo = {"/dashboard/savings"}/>
        </div>
        <div className="m-md-1 me-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"/><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z"/></svg>} name={"Add Money"} navigateTo = {"/dashboard/addmoney"}/>
        </div>
        <div className="m-md-1 m-0" style={style}>
          <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="3.3em" height="3.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z"/></svg>} name={"Send Money"} navigateTo={"/dashboard/sendmoney"}/>
        </div>
      </div>
    </>
  )
}

export default QuickActions;
