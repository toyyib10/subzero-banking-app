import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
import {Routes , Route} from 'react-router-dom'
import Main from "../components/dashboard/Main";

const Dashboard = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="row">  
        <SideBar/>     
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-1">  
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
        </main>       
      </div>
    </div>
    </>
  )
}

export default Dashboard;
