import React from 'react'

const SideBar = () => {
  // body {
  //   min-height: 100vh;
  //   min-height: -webkit-fill-available;
  // }
  
  // html {
  //   height: -webkit-fill-available;
  // }
  // (function () {
  //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  //     new bootstrap.Tooltip(tooltipTriggerEl)
  //   })
  // })()
  const width = {
    width: '230px'
  }
  return (
    <>
      <div className="col-md-3 col-lg-2 d-md-block p-3 bg-dark sidebar collapse" id="sidebarMenu" style={width}>
        <a href="/" className="d-flex align-items-center mb-4 me-md-auto text-white text-decoration-none">
          <span className="fs-2">Sidebar</span>
        </a>
        <h5 className="text-secondary fs-6">SERVICES</h5>
        <ul className="nav nav-pills flex-column mb-4">
          <li>
            <a href="/" className="nav-link text-secondary">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-secondary" aria-current="page">
              Add money
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-secondary">
              Send money
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-secondary">
              Quick actions
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-secondary">
              Wallets
            </a>
          </li>
          <li>
            <a href="/" className="nav-link text-secondary">
              History
            </a>
          </li>
        </ul>
        <h5 className="text-secondary p-0 m-0 fs-6">ACCOUNT</h5>
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="/" className="nav-link text-secondary">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-secondary" aria-current="page">
              Notification 
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-secondary" aria-current="page">
              Theme
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link text-secondary" aria-current="page">
              Sign Out 
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
