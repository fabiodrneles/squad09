import './style.css';
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import Search from '../../views/Search'
import Login from '../../views/Login'
import About from '../../views/About'
import { AuthProvider } from "../api/auth";
import { CheckLogin } from '../api/checkLogin';
import { RequireLogin } from '../api/requireLogin';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <CheckLogin><Login/></CheckLogin>  }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/search" element={ <RequireLogin><Search/></RequireLogin> }/>
      </Routes>
    </AuthProvider>
    </div>
  );
}
export default App;