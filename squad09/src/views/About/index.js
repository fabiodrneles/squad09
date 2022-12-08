import React, { useState } from "react";
import Header from "../../components/Header";

function About(){
  const [buttonName, setButtonName] = useState(['Sobre', 'Login'])
  return(
    <>
      <div>
        <Header button={buttonName}/>
      </div>
      <h1>Aqui será a About</h1> 

    </>
  )
}
export default About;