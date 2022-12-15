import './style.css';
import Header from "../../components/Header";
import IconHome from '../../assets/icon-home.svg'

function Login() {
    const buttonStyles =[
      {
        title: "HOME",
        icon: IconHome,
        route: "/",
        textColor: "#0A1744",
        backgroundColor: "#72EFDB",
      },]

    return (
        <div className="container">
          <Header buttons={buttonStyles}/> 

            <div className="container-login">
                <div className="wrap-login">
                    <form className="form-login">
                        <spam className="text-login"> Login</spam>

                        <div className="Wrap-input">
                            <input className="input" type="email" placeholder="Usuario" required/>
                        </div>

                        <div className="Wrap-input">
                            <input className="input" type="password" placeholder='senha' required/>
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