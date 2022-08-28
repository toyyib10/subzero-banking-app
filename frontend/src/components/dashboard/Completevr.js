import Button from "../Button"

const Completevr = ({userinfo, submit, setid, setimage, setnewpin, setconfirmpin}) => {
  const covertToString = (e) => {
    let myImage = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(myImage)
    reader.onload = ()=>{
      setimage(reader.result)
    }
  }
  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center pb-3">
        <form novalidate>
          <div className="col-12 mb-5 bg-white shadow pb-3 px-4">
            <h1 className="w-100 text-center mt-3">Complete Information</h1>
            <div className="w-100 d-flex flex column justify-content-center mt-3 flex-column align-items-center">
              <label className="form-label my-2 text-start w-100 fs-4">Choose Image</label>
              <input className="form-control form-control-lg w-100 mb-2" type="file" name="" id="" onChange={(e) => covertToString(e)} accept=".jpg , .png" required/>
              <label className="form-label text-start w-100 fs-4">New pin</label>
              <input className="form-control form-control-lg w-100" type="password" onChange={(e) => setnewpin(e.target.value)} required/>
              <label className="form-label my-2 text-start w-100 fs-4">Confirm pin</label>
              <input className="form-control form-control-lg w-100"  type="password" onChange={(e) => setconfirmpin(e.target.value)} required/>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <Button todo={"Submit"} sign={submit}/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Completevr;
