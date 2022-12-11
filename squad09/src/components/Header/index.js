import React from "react";
import "./style.css";
import { IoInformationCircleSharp } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';

function Top(){
    return (
        <div ClassName="Header">

            <div className="caixaMaior">
                <div>
                    <h2>hashtag<span>finder</span></h2>
                </div>

                <div className="botoes">
                    <button className="btnLeft">
                    <IoInformationCircleSharp/>
                      Sobre
                    </button>
                    <button className="btnRight">
                    <BsFillPersonFill/>
                      Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Top;