const Header = () => {
  const style = {
    height : "70px"
  }
  return (
    <>
      <nav className="navbar sticky-top flex-md-nowrap navbar-expand navbar-dark bg-dark" aria-label="Second navbar example" style={style}>
        <div className="container-fluid">
          <a className="navbar-brand text-dark fs-3" href="/">Always expand</a>
          
            
          <div className="" >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
            </ul>
          </div>
          <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Header;
