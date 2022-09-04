import Button from "../../Button"
import {useNavigate} from "react-router-dom"

const Card = () => {
  const navigate = useNavigate()
  const back = () => {
    navigate("../")
  }
  return (
    <div className="w-100 px-lg-4 pb-lg-4 px-2 pt-3 h-100">
        <div className="w-100 bg-white shadow h-100 p-4 rounded-1 p-4 d-flex flex-wrap justify-content-between">
          <div class="col-lg-6 col-md-6 col-12">
            <img src="/images/metal.gif" alt="Card"/>
          </div>
          <div className="d-flex align-content-center flex-column col-lg-6 col-md-6 col-12 justify-content-center">
              <h2 className="text-center mb-3">Cards are coming soon ...</h2>
              <Button todo={"Back to Quick Actions"} sign={back}/>
          </div>
        </div>
      </div>
  )
}

export default Card;