import Carousel from "../components/sign/Carousel";
import SignupComponent from "../components/sign/Signup.component";

const Signup = () => {
  const style = {
    height: "90%"
  }
  return (
    <>
      <center className="pt-5 h-100">
        <div className="d-flex flex-wrap shadow col-md-9 col-10 bg-white rounded-5 p-0" style={style}>
          <Carousel/>
          <SignupComponent/>
        </div>
      </center>
    </>
  )
}

export default Signup;
