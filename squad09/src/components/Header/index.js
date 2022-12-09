import React from "react";
import "./style.css";

function Top(){
    return (
        <div ClassName="Header">

            <div className="caixaMaior">
                <div>
                    <h2>hashtag<span>finder</span></h2>
                </div>

                <div className="botoes">
                    <button className="btnLeft">Sobre</button>
                    <button className="btnRight">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Top;