import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Dashboard from './starters/Dashboard';
import Signin from './starters/Signin';
import Signup from './starters/Signup';
import {Routes ,Route ,Navigate} from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Navigate to="/signup"/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App;

