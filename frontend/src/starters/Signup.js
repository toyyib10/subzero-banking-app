import Carousel from "../components/sign/Carousel";
import SignupComponent from "../components/sign/Signup.component";

const Signup = () => {
  const style = {
    height: "95%",
  }
  return (
    <>
      <center className="pt-5 h-100">
        <div className="d-flex bg-white flex-wrap shadow col-md-9 col-10 rounded-5 p-0" style={style}>
          <Carousel/>
          <SignupComponent/>
        </div>
      </center>
    </>
  )
}

export default Signup;
