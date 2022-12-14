const Button = ({todo , sign}) => {
  const style = {
    backgroundColor : "rgb(172, 255, 47)",
  }
  return (
    <>
      <div className="mt-2">
        <center>
          <button className="btn btn-lg text-white btn-light fw-2" style={style} type="button" onClick={(e) => sign(e)}>{todo}</button>
        </center>
      </div> 
    </>
  )
}

export default Button;
