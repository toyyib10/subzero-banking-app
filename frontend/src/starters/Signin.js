import Carousel from "../components/sign/Carousel";
import SigninComponent from "../components/sign/Signin.component";

const Signup = () => {
  const style = {
    height: "90%",
  }
  return (
    <>
      <center className="pt-5 h-100">
        <div className="d-flex bg-white flex-wrap shadow col-md-9 col-10 bg-white rounded-5 p-0" style={style}>
          <Carousel/>
          <SigninComponent/>
        </div>
      </center>
    </>
  )
}

export default Signup;
