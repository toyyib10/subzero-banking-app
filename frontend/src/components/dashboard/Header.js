const Header = ({result}) => {
  const style = {
    height : "75px"
  }
  const color ={
    color : "rgb(172, 171, 171)"
  }
  return (
    <>
      <header className="navbar sticky-top p-0 navbar-dark bg-white" aria-label="Second navbar example" style={style}>
        <div className=" h-100 d-flex justify-content-between w-100">
          <div className="bg-dark col-md-3 col-lg-2 p-4 pt-3 d-md-block d-none">
            <h1 className="d-flex align-items-center mb-3 me-md-auto text-white">
              Subzero
            </h1>
          </div>
          <div className="navbar-brand text-dark fs-4 d-flex h-100 col-lg-8 col-md-6 ms-md-1 me-lg-3 p-md-2 p-lg-1 ms-3 col-2">
            <div className="col-md-2 col-lg-1 col-12 h-100 rounded-circle border"> 
              <img className="col-12 h-100 rounded-circle border-0" src={result.image} alt=""/>
            </div>
            <div className="ms-2 ms-md-3">
              <h3 className="fs-2 m-0 p-0">Hi {result.lastname},</h3>
              <p className="fs-6 m-0 p-0 pb-2" style={color}>
                Welcome
                &#128075;
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between p-3 me-md-3">
            <button className="btn bg-light me-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
            </button>
            <button className="navbar-toggler btn collapsed d-block bg-light text-dark d-md-none me-2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            </button>
            <button className="btn bg-light">
              <a href="/" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg> 
              </a>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
