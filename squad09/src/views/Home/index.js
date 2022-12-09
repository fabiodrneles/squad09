import React,{useState} from "react";
import Header from "../../components/Header";


function Home(){
  const [btnName, setBtnName] = useState(['Sobre', 'Login'])

  return(
    <>
     <>
        <div className="botoes">
          <Header button={btnName}/>
        </div>

        <div className="conteudo">

          <h1>Aqui será a Home</h1> 
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>
          <h2>Aqui será a home</h2>

        </div>

      </>
    </>
  )
}
export default Home;