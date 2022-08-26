import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import Money from "../components/dashboard/Money";
import Phone from "../components/dashboard/Phone";

const Dashboard = () => {
  const style = {
    height: "60%"
  }
  const other = {
    height : "40%"
  }
  return (
    <>
    <section className="d-flex h-100">
      <SideBar/>
      <div className="d-flex flex-column w-100">
        <Header/>
        <div className="w-100 bg-danger d-flex flex-wrap px-md-4 px-2 pt-3" style={style}>
          <div className="bg-success h-100 col-md-8 col-12">
            <div className="bg-light w-100 d-md-flex justify-content-between align-item-center pe-md-3 pb-3 py-md-3 pe-0 d-none" style={other}>
              <Money/>
              <Money/>
              <Money/>
            </div>
            <div className="bg-light w-100 d-md-none pb-2 pt-2 pe-0 d-flex justify-content-center" style={other}>
              <Phone/>
            </div>
            <div className="bg-primary w-100 mt-md-0 mt-2" style={style}></div>
          </div>
          <div className="bg-warning h-100 col-md-4 col-12"></div>
        </div>
        <div className="w-100 bg-danger px-3" style={other}></div>
      </div>
    </section>
      
    </>
  )
}

export default Dashboard;
