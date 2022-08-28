import React from 'react'

const SideBar = () => { 
  const style= {
    backgroundColor : "rgb(255, 255 ,255 ,0.1)"
  }
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse p-4">
        <div className="position-sticky pt-3">
          <p className="d-flex align-items-center mb-3 me-md-auto text-white d-md-none d-block">
            <span className="fs-2">Subzero</span>
          </p>
          <h5 className="text-secondary fs-6">SERVICES</h5>
          <ul className="nav nav-pills flex-column mb-4">
            <li className="rounded mt-2" style={style}>
              <a href="/" className="nav-link text-white">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40"><path fill="rgb(172, 255, 47)" d="M15.781 17.868H4.534c-1.02 0-1.85-.831-1.85-1.854V4.768c0-1.02.83-1.85 1.85-1.85h11.247c1.02 0 1.85.83 1.85 1.85v11.247c0 1.022-.83 1.853-1.85 1.853zM4.534 3.804a.964.964 0 0 0-.963.964v11.247c0 .533.432.967.963.967h11.247a.966.966 0 0 0 .963-.967V4.768a.964.964 0 0 0-.963-.964H4.534zm30.935 14.064h-11.25a1.853 1.853 0 0 1-1.849-1.854V4.768c0-1.02.829-1.85 1.849-1.85h11.25a1.85 1.85 0 0 1 1.847 1.85v11.247a1.853 1.853 0 0 1-1.847 1.853zM24.219 3.804a.964.964 0 0 0-.963.964v11.247c0 .533.432.967.963.967h11.25c.52 0 .96-.443.96-.967V4.768a.962.962 0 0 0-.96-.964h-11.25zm-8.438 33.279H4.534c-1.02 0-1.85-.83-1.85-1.85v-11.25c0-1.021.83-1.851 1.85-1.851h11.247c1.02 0 1.85.83 1.85 1.851v11.249c0 1.02-.83 1.851-1.85 1.851zM4.534 23.019a.965.965 0 0 0-.963.964v11.249c0 .532.432.964.963.964h11.247a.964.964 0 0 0 .963-.964V23.983a.964.964 0 0 0-.963-.964H4.534zm30.935 14.064h-11.25c-1.02 0-1.849-.83-1.849-1.85v-11.25c0-1.021.829-1.851 1.849-1.851h11.25c1.018 0 1.847.83 1.847 1.851v11.249a1.852 1.852 0 0 1-1.847 1.851zm-11.25-14.064a.965.965 0 0 0-.963.964v11.249c0 .532.432.964.963.964h11.25c.53 0 .96-.432.96-.964V23.983a.962.962 0 0 0-.96-.964h-11.25z"/></svg>
                Dashboard
              </a>
            </li>
            <li className="rounded  mt-1">
              <a href="/" className="nav-link text-secondary" aria-current="page">
                <svg className="me-2 mb-1"  xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="rgb(255 ,255 , 255 , 0.4)" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"/><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z"/></svg>
                Add money
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-secondary">
              <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05Z"/></svg>
                Send money
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-secondary">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M371.984 305.035c-13.512 50.421-65.335 80.346-115.76 66.832c-50.413-13.507-80.338-65.337-66.829-115.755c13.512-50.42 65.335-80.341 115.753-66.832c50.425 13.513 80.345 65.333 66.836 115.755zm50.755-62.632c-11.252-37.641-8.781-85.581 1.538-125.371C436.646 69.336 403.557 16.19 355.01 3.183C305.54-10.07 250.636 19.276 237.63 68.714c-9.964 37.88-30.14 75.11-56.251 103.12c-29.642 31.132-67.354 53.261-109.624 64.586c-51.499 13.8-82.087 66.826-68.284 118.34c13.815 51.5 66.762 82.09 118.284 68.272c38.458-9.816 83.883-12.17 120.92-.59c44.85 14.024 75.184 31.778 109.082 64.938c36.67 35.872 97.125 30.817 131.917-3.967c35.313-35.3 38.553-96.17 3.28-132.798c-29.76-30.902-50.321-61.734-64.216-108.212z"/></svg>
                Quick actions
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-secondary">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M9.368 1.222a1 1 0 0 0-1.414.15L5.058 5h1.28l2.397-3.004l.77.629L7.575 5h1.288l1.417-1.744l1.718 1.403L11.7 5h.3a3 3 0 0 1 .88.131a1 1 0 0 0-.25-1.245L9.368 1.222ZM3 5.5a.5.5 0 0 1 .5-.5h.558l.795-1H3.5A1.5 1.5 0 0 0 2 5.5v6A2.5 2.5 0 0 0 4.5 14H12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3.5a.5.5 0 0 1-.5-.5Zm7.5 4.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"/></svg>
                Wallets
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-secondary">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M8 3.5A4.5 4.5 0 1 1 3.5 8A.75.75 0 0 0 2 8a6 6 0 1 0 2.5-4.874V2.75a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5h-.079A4.48 4.48 0 0 1 8 3.5Zm.5 2.25a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5H8.5V5.75Z"/></svg>
                History
              </a>
            </li>
          </ul>
          <h5 className="text-secondary p-0 m- pb-1 fs-6">ACCOUNT</h5>
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="/" className="nav-link text-secondary">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"/></svg>
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-secondary" aria-current="page">
                <svg className="me-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="m32.85 28.13l-.34-.3A14.37 14.37 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93l-.34.3v2.82h29.8Z" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M15.32 32a2.65 2.65 0 0 0 5.25 0Z" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                Notification 
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-secondary" aria-current="page">
                <svg className="me-2 mb-1"
                xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 0 1 0 17Z"/></svg>
                Theme
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default SideBar
