import './style.css';
import { useState, useEffect } from "react";
import IconHome from '../../assets/icon-home.svg'
import Header from "../../components/App/header/header";
import { validateEmail, validatePassword } from '../../components/App/validation/validation'


function Login() {
  const [email, SetEmail] = useState("")
  const [password, SetPassword] = useState("")
  const [emailErr, SetEmailErr] = useState(false)
  const [passwordErr, SetPasswordErr] = useState(false)


  //validação de email
  const validate = () => {
    if (!validateEmail.test(email)) {
      SetEmailErr(true)
    } else {
      SetEmailErr(false)
    }

    if (!validatePassword.test(password)) {
      SetPasswordErr(true)
    } else {
      SetPasswordErr(false)
    }
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


  /* useEffect(() => {
       //function that retrieves users with priviliges
       if(props.signed){
         navigate("/list");
         return;
       }
       async function getList() {
   
         const requestOptions = {
           method: "GET",
           headers: {
             authorization: "Bearer key2CwkHb0CKumjuM",
             "Content-Type": "application/json",
           },
   
         };
   
         const response = await fetch(APIGET, requestOptions);
         const data = await response.json();
         setUsersList(data.records);
   
       }
       getList();
     }, [props.signed,  navigate])*/

  return (
    <div className="container">
      <Header buttons={buttonStyles} />

      <div className="container-login">
        <div className="wrap-login">
          <form className="form-login">
            <spam className="text-login"> Login</spam>

            <div className="Wrap-input">
              <input className="input"
                type="text"
                placeholder="Usuario"
                value={email}
                onBlur={(e) => SetEmail(e.target.value)}
              />
              {emailErr && <p>Por favor digete um email valido!</p>}

            </div>

            <div className="Wrap-input">
              <input
                className="input"
                type="password"
                placeholder='senha'
                value={password}
                onBlur={(e) => SetPassword(e.target.value)}
              />
              {passwordErr && <p>Por favor digete um senha valida!</p>}
            </div>

            <div className="container-button">
              <button className="button-send">ACESSAR</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )

}


export default Login