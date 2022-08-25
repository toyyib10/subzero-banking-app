import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";

const Dashboard = () => {
  return (
    <>
    <section className="d-flex h-100">
      <SideBar/>
      <div className="d-flex flex-column w-100">
        <Header/>
      </div>
    </section>
      
    </>
  )
}

export default Dashboard;
