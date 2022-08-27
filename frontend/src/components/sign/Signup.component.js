import Button from '../Button'
import Input from './Input';
import {Link} from 'react-router-dom'

const SignupComponent = ({setfirstname, setlastname, setemail, setphonenumber, setpassword, setpin, setimage, signUp}) => {
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
          <Input name={"First Name"} setvalue={setfirstname}/>
          <Input name={"Last Name"} setvalue={setlastname}/>
          <Input name={"Email"} type={"email"} setvalue={setemail}/>
          <Input name={"Phone Number"} type={"number"} setvalue={setphonenumber}/>
          <Input name={"Password"} type={"password"} setvalue={setpassword}/>
          <Input name={"pin"} type={"hidden"} setvalue={setpin}/>
          <Input name={"image"} type={"hidden"} setvalue={setimage}/>
          <Button todo={"Create an Account"} signUp={signUp}/>
          <h5 className="m-0 mt-2 text-white">OR</h5>
          <div className="w-100 d-flex justify-content-between align-items-center h-100 mb-2">
            <Link to="#" className="text-white w-50 me-2">Sign up with Google</Link> <span className="text-white">|</span>
            <Link to="/signin" className="w-50 text-white">Login</Link>
          </div>
        </form>  
      </center>
    </>
  )
}

export default SignupComponent;
