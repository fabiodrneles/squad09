import React from "react";
import "./index.css"
import Top from "../src/components/Header/index.js";
import Footer from "../src/components/Footer/index.js"
import Context from "../src/components/context/index"; 
function App() {
  return (
    <div className="App">

      <Top/>
      <Context/>
      <Footer/>


    </div>
  );
}

export default App;
