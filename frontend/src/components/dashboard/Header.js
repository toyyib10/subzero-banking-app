const Header = () => {
  const style = {
    height : "75px"
  }
  return (
    <>
      <nav className="navbar sticky-top flex-md-nowrap navbar-expand navbar-dark bg-white" aria-label="Second navbar example" style={style}>
        <div className="container-fluid">
          <p className="navbar-brand text-dark fs-4 m-0" href="/">Always expand</p>
          <div className="">
            <ul className="navbar-nav me-auto">
              <li className="me-2">
                  <button className="btn bg-light">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
                  </button>
              </li>
              <li className="me-2">
                <button className="position-sticky btn d-md-none collapsed d-sm-block bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                </button>
              </li>
              <li>
                <button className="btn bg-light">
                  <a href="/" aria-current="page">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg> 
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
