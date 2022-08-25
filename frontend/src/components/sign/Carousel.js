const banking = require('../../images/banking.jpg');
const bank = require('../../images/bank.jpg');
const download = require('../../images/download.jpg');

const Carousel = () => {
  const style = {
    borderRadius : "30px 0px 0px 30px",
    height : "100%"
  }
  return (
    <>
      <div id="carouselExampleSlidesOnly" style={style} className="h-100 carousel d-none d-lg-block d-md-block slide m-0 p-0 col-12 col-md-7 border" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          <div className="carousel-item h-100 " style={style}>
            <img src={banking} className="d-block col-12 h-100" style={style}  alt="First name"/>
          </div>
          <div className="carousel-item h-100" style={style}>
            <img src={bank} className="d-block col-12 h-100" style={style} alt="Second name" />
          </div>
          <div className="carousel-item active h-100" style={style}>
            <img src={download} className="d-block col-12 h-100 rounded-left" style={style} alt="third nam" />
          </div>
        </div>  
      </div>
    </>
  )
}

export default Carousel;
