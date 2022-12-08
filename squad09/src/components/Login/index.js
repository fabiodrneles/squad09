import './Style.css';
function Login(){
    return (
        <div className="container">

            <div className='ListMain'>
                <div className='header' >
                    <p className='hastag'>hashtag<span className='Find'>finder</span></p>
                    <div className='buttons'>
                        <button className='buttonHome'>Home</button>
                    </div>
                </div>
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