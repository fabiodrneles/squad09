import React,{useState} from "react";
import Header from "../../components/Header";


function Home(){
  const [btnName, setBtnName] = useState(['Sobre', 'Login'])

  return(
    <>
     <>
      <div>
        <Header button={btnName}/>
      </div>
      <h1>Aqui será a Home</h1> 

    </>
    Aqui será Home
    </>
  )
}
export default Home;