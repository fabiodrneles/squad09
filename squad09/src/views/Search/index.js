import Searc from "../../components/Searc";
import React, { useState } from "react";

import Footer from "../../components/Footer";


function Search(){
  const [buttonsName, setButtonsName] = useState(['HOME', 'SAIR'])
  return(
    <>
         {/* <Header button={buttonsName}/> */}
          <Searc/>
          <Footer/>
    </>
  )
}
export default Search;