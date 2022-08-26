import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import {Routes , Route} from 'react-router-dom'
import Main from "../components/dashboard/Main";

const Dashboard = () => {
  return (
    <>
    <section className="d-flex h-100">
      <SideBar/>
      <div className="d-flex flex-column w-100">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/addmoney"/>
          <Route path="/sendmoney"/>
          <Route path="/quickactions"/>
          <Route path="/wallets"/>
          <Route path="/history"/>
          <Route path="/profile"/>
          <Route path="/notification"/>
        </Routes>
      </div>
    </section>
    </>
  )
}

export default Dashboard;
