import './style.css';
import Header from "../../components/Header/index";
import IconHome from '../../assets/icon-home.svg';
import { useState } from 'react';
import { useAuth } from "../../components/validate/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const auth = useAuth();
  const navigate = useNavigate();

  //validação de email
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=8&view=Grid%20view&filterByFormula={Squad}=09/22',
      {
        method: "GET",
        headers: {
        Authorization:'Bearer keyz8BAZKCTGY5dB1',
        },
      },
    ).then((response) => response.json())
        .then(function (database) {
          database.records.map((data)=>{
          if(data.fields.email === email && data.fields.Senha === password){
            auth.login(true);
            navigate('/earch', {replace: true});
          }
          return null
        })
        document.getElementById('messageError').innerHTML = 'Atenção! Seus dados são inválidos!'
      })
  }


  // personalização do header 
  const buttonStyles = [
    {
      title: "HOME",
      icon: IconHome,
      route: "/",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    },]


 
  return (
    <div className="container">
      <Header buttons={buttonStyles} />

      <div className="container-login">
        <div className="wrap-login">
          <form onSubmit={handleSubmit} className="form-login">
            <spam className="text-login"> Login</spam>

            <div className="Wrap-input">
              <input className="input"
                type="email"
                placeholder="Usuario"
                onChange={(e) => SetEmail(e.target.value)}
                required
              />

            </div>

            <div className="Wrap-input">
              <input
                className="input"
                type="password"
                placeholder='senha'
                onChange={(e) => SetPassword(e.target.value)}
                required
              />
            </div>

            <div className="container-button">
              <button type="subimt" className="button-send">ACESSAR</button>
              <span className="Error" id="messageError"></span>
            </div>

          </form>
        </div>
      </div>
    </div>
  )

}


export default Login