import './style.css';
<<<<<<< HEAD
import React from 'react';
import NavBar from '../NavBar/index.js';
=======
import { Route, Routes } from "react-router-dom"
import Home from '../../views/Home'
import Search from '../../views/Search'
import Login from '../../views/Login'
import About from '../../views/About'
>>>>>>> d163cd6e52593ab574617dc3db4885dfb223e41c

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <NavBar/>


=======
        <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/search" element={ <Search/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
>>>>>>> d163cd6e52593ab574617dc3db4885dfb223e41c
    </div>
  );
}

export default App;
