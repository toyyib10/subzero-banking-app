import React from 'react'
import Actions from "./Actions"
const DashboardAction = () => {
  const height = {
    height : "32em"
  }
  return (
    <div className="w-100 p-1 p-md-2 mt-md-3 mt-lg-3 p-lg-3 pt-3 pt-md-0 pt-lg-0 h-100">
      <div className="bg-white shadow p-md-2 w-100 p-0 rounded-1 d-flex flex-wrap" style={height}>
        <div>lddddddddddddddddddddddddddddddddddd</div>
        <div className="d-flex flex-column align-items-end w-100 h-50 p-2">
          <div className="w-100 d-flex justify-content-between h-50 mb-2">
            <div className="m-md-2 me-1 m-0 w-100 h-100">
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"/></svg>} name={"Airtime"} navigateTo = {"/dashboard/quickaction/buyairtime"}/>
            </div>
            <div className="m-md-2 me-1 m-0 w-100 h-100">
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/></svg>} name={"Data"} navigateTo = {"/dashboard/quickaction/buydata"}/>
            </div>
            <div className="m-md-2 me-1 m-0 w-100 h-100">
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"/></svg>} name={"Electricity"} navigateTo = {"/dashboard/quickaction/buyelectricity"}/>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-between h-50">
            <div className="m-md-2 m-0 w-100 h-100" >
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/></svg>} name={"Cable TV"} navigateTo = {"/dashboard/quickaction/buysubcription"}/>
            </div>
            <div className="m-md-2 ms-2 me-1 ms-md-3 m-0 w-100 h-100">
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2s-2 .849-2 2s.848 2 2 2z"/><path fill="currentColor" d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14l-16-.011V6l16 .011V18z"/><path fill="currentColor" d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"/></svg>} name={"Card"} navigateTo = {"/dashboard/quickaction/viewcard"}/>
            </div>
            <div className="m-md-2 me-1 m-0 w-100 h-100">
              <Actions svg={<svg className="mb-2" xmlns="http://www.w3.org/2000/svg" width="5.3em" height="5.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="m400 96l-.9.66c-4.4-.44-9.7-.66-15.1-.66H256c-16.5 0-32.5 2.08-47.8 6c-.1-2-.2-3.98-.2-6c0-53.02 42.1-96 96-96c53 0 96 42.98 96 96zm-16 32c3.5 0 6.1.1 10.4.3c4.3.3 8.5.7 12.6 1.3c17.6-20.5 43.8-33.6 73-33.6h32l-18.8 75.1c15.9 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H256v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c-34.9-26.2-58.7-66.2-63.21-112H68c-37.56 0-68-30.4-68-68s30.44-68 68-68h4c13.25 0 24 10.7 24 24s-10.75 24-24 24h-4c-11.05 0-20 8.1-20 20c0 11 8.95 20 20 20h31.2c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 25.6-5.2 40.5-5.2h128zm40 112c-13.3 0-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24s-10.7-24-24-24z"/></svg>} name={"Savings"} navigateTo = {"/dashboard/wallets"}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default DashboardAction;
