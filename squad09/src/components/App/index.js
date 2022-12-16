import './style.css';
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import Search from '../../views/Search'
import Login from '../../views/Login'
import About from '../../views/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/search" element={ <Search/> }/>
      </Routes>
    </div>
  );
}
export default App;