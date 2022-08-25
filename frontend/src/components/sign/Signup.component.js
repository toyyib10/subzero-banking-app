const SignupComponent = () => {
  return (
    <>
      <center className="col-12 col-md-5 d-flex justify-content-center align-items-center p-2">
        <form className="row col-10 needs-validation rounded pt-2 pb-3 bg-secondary" novalidate>
          <div className="text-center fs-2 text-danger">Create an Account</div>
          <div className="form-floating mb-2 mt-4">
            <input type="text" className="form-control" id="validationTooltip02" placeholder="First Name" required />
            <label className="form-label text-start ms-2">First name</label>
          </div>
          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="validationTooltip02" placeholder="First Name" required />
            <label className="form-label text-start ms-2">First name</label>
          </div>
          <div className="mb-2 form-floating">
            <input type="text" className="form-control" id="validationTooltip02" placeholder="First Name" required />
            <label className="form-label text-start ms-2">First name</label>
          </div>
          <div className="mb-2 form-floating">
            <input type="text" className="form-control" id="validationTooltip02" placeholder="First Name" required />
            <label className="form-label text-start ms-2">First name</label>
          </div>
          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="validationTooltip02" placeholder="First Name" required />
            <label className="form-label text-start ms-2">First name</label>
          </div>  
          <div className="mt-3">
            <center>
              <button className="btn btn-primary fw-2" type="submit">Create Account</button>
            </center>
          </div>
        </form>  
      </center>
    </>
  )
}

export default SignupComponent;
