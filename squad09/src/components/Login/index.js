import './style.css';
function Login(){
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="form-login">
                        <spam> Login</spam>

                        <div className="Wrap-input">
                            <input type="email"/>
                            <span className="focus-input" data-placeholder="email"></span>
                        </div>

                        <div className="Wrap-input">
                            <input type="password"/>
                            <span className="focus-input" data-placeholder="password"></span>
                        </div>

                        <div className="button-send">
                            <button type="submit">Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    )

}


export default Login