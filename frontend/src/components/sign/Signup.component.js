import Button from '../Button'
import Input from './Input';

const SignupComponent = () => {
  const style = {
    height : "inherit",
  }
  const color = {
    color : "rgb(172, 255, 47)"
  }
  return (
    <>
      <center className="col-12 col-md-5 d-flex justify-content-center align-items-center p-2">
        <form className="row col-10 needs-validation rounded pt-2 pb-2 bg-dark" style={style} novalidate>
          <div className="text-center fs-2" style={color}>Create an Account</div>
          <Input name={"First Name"}/>
          <Input name={"Last Name"}/>
          <Input name={"Email"} type={"email"}/>
          <Input name={"Phone Number"}/>
          <Input name={"Password"} type={"password"}/>
          <Button todo={"Create an Account"}/>
          <h5 className="m-0 mt-2 text-white">OR</h5>
          <div className="w-100 d-flex justify-content-between align-items-center h-100 mb-2">
            <a href="/" className="text-white w-50 me-2">Sign up with Google</a> <span className="text-white">|</span>
            <a href="/" className="w-50 text-white">Login</a>
          </div>
        </form>  
      </center>
    </>
  )
}

export default SignupComponent;
