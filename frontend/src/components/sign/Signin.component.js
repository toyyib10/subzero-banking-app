import Button from '../Button'
import Input from './Input';
import {Link} from "react-router-dom"

const SignupComponent = () => {
  const style = {
    height : "inherit",
    
  }
  const color = {
    color: "rgb(172, 255, 47)"
  }
  return (
    <>
      <center className="col-12 col-md-5 d-flex justify-content-center align-items-center p-2 py-4">
        <form className="row col-10 needs-validation rounded pt-2 pb-3 h-100 bg-dark" style ={style} novalidate>
          <div className="text-center fs-2 mb-4" style={color}>Login</div>
          <div>
            <Input name={"Email"} type={"email"}  />
          </div>
          <div>
            <Input name={"Password"} type={"password"}/>
          </div>
          
          <Button todo={"Login"}/>
          <h5 className="m-0 mt-4 text-white">OR</h5>
          <div className="w-100 d-flex justify-content-between align-items-center ">
            <Link to="#" className="text-white w-50 me-2">Sign in with Google</Link> |
            <Link to="/signup" className="w-50 text-white">Create an Account</Link>
          </div>
        </form>  
      </center>
    </>
  )
}

export default SignupComponent;