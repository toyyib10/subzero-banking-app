const Button = ({todo}) => {
  const style = {
    backgroundColor : "rgb(172, 255, 47)",
  }
  return (
    <>
      <div className="mt-2">
        <center>
          <button className="btn btn-lg text-white fw-2 w-75" style={style} type="submit">{todo}</button>
        </center>
      </div> 
    </>
  )
}

export default Button;
