const Input = ({name, type}) => {
  return (
    <>
      <div className="form-floating mb-1 mt-1">
        <input type={type} className="form-control" id="validationTooltip02" placeholder={name} required />
        <label className="form-label text-start ms-2">{name}</label>
      </div> 
    </>
  )
}

export default Input;
