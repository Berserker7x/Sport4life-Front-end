import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Signup from './Components/Signup'
import Home from './Components/SideBarComponent/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/SignUp" element={<Signup/>} > SignUp </Route>
    <Route path="/" element={<Login/>} > Login </Route>
    <Route path="/Home" element={<Home/>} >Home</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
