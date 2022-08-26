import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import Money from "../components/dashboard/Money";
import Phone from "../components/dashboard/Phone";
import QuickActions from "../components/dashboard/QuickActions";

const Dashboard = () => {
  const style = {
    height: "65%"
  }
  const other = {
    height : "35%"
  }
  const color = {
    color : "white",
    backgroundColor : "rgb(0,0,10,0.8)"
  }
  const color2 = {
    backgroundColor : "rgb(255,255,255,0.8)"
  }
  const colBg = {
    backgroundColor:'rgb(172, 255, 47, 0.2)'
  }
  const col ={
    backgroundColor:"rgba(172, 171, 171, 0.536)"
  }
  const design = {
    color : "white"
  }
  const design2 = {
    color : "black"
  }
  return (
    <>
    <section className="d-flex h-100">
      <SideBar/>
      <div className="d-flex flex-column w-100">
        <Header/>
        <div className="w-100 d-flex flex-wrap px-md-4 px-2 pt-3" style={style}>
          <div className=" h-100 col-md-8 col-12">
            {/* MONEY */}
            <div className="bg-light w-100 d-md-flex justify-content-between align-items-center pe-md-3 pe-0 d-none" style={other}>
              <Money component={color} col = {"rgb(172, 255, 47)"} colBg = {colBg} col2={"white"} col3={design} text={"Total balance"} amount={"3000000"}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total spending"} amount={"3000000"}/>
              <Money component={color2} col = {"black"} colBg = {col} col2 = {"black"} col3={design2} text={"Total saved"} amount={"3000000"}/>
            </div>
            {/* PHONE */}
            <div className="w-100 h-50 d-md-none pb-2 pt-1 pe-0 d-flex justify-content-center" style={other}>
              <Phone/>
            </div>
            {/* QUICK ACTIONS */}
            <div className="w-100 mt-md-0 pt-md-3 pe-md-3 pe-0 pt-3" style={style}>
              <QuickActions/>
            </div>
          </div>
          <div className=" h-100 col-md-4 col-12">

          </div>
        </div>
        <div className="w-100 px-3" style={other}></div>
      </div>
    </section>
      
    </>
  )
}

export default Dashboard;
