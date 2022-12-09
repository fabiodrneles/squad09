import './Style.css';
import React,{useState} from "react";
import Header from "../../components/Header";

function Login(){
    const [btnName, setBtnName] = useState(['Home'])

    return (
        <div className="container">

        <div>
            <Header button={btnName}/>
        </div>

            <div className="container-login">
                <div className="wrap-login">
                    <form className="form-login">
                        <spam className="text-login"> Login</spam>

                        <div className="Wrap-input">
                            <input className="input" type="email" placeholder="Usuario"/>
                        </div>

                        <div className="Wrap-input">
                            <input className="input" type="password" placeholder='senha'/>
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