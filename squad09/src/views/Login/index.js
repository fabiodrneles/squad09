import './style.css';
import Header from "../../components/Header/index";
import IconHome from '../../assets/icon-home.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const navigate = useNavigate();

  //validação de email
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=Find(%2209-22%22%2C+Squad)',
      {
        method: "GET",
        headers: {
        Authorization:'Bearer keymkBEBt2FCf4w3w',
        },
      },
    )
    .then((response) =>  {return response.json()})
    .then(function (data) {
      const dataEmail = data.records[0].fields.Email
      const dataPassword = data.records[0].fields.Senha
        if(dataEmail === email && dataPassword === password){
          navigate('/search', {replace: true});
          localStorage.clear()
        }
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