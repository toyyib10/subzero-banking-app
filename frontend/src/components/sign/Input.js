const Input = ({name, type, setvalue}) => {
  return (
    <>
      <div className="form-floating mb-1 mt-1">
        <input type={type} className="form-control" id="validationTooltip02" placeholder={name} required  onChange={(e) => (setvalue(e.target.value))}/>
        <label className="form-label text-start ms-2">{name}</label>
      </div> 
    </>
  )
}

export default Input;
