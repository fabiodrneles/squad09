import './style.css';
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import Search from '../../views/Search'
import Login from '../../views/Login'
import About from '../../views/About'
import Footer from '../Footer/index'

function App() {
  return (
    <div className="App">

        <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/search" element={ <Search/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;