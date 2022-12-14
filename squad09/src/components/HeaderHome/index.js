import React from "react";
import "./style.css";
import { IoInformationCircleSharp } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

function Top() {
  return (
    <div ClassName="Header">

      <div className="caixaMaior">

        <Link to="/">
          {" "}
          <h2>
            hashtag<span>finder</span>
          </h2>
        </Link>

        <div className="botoes">
          <button className="btnLeft">
            <div className="info">
              <IoInformationCircleSharp />
            </div>
            <p>Sobre</p>
          </button>

          <button className="btnRight">
            <div className="person">
              <BsFillPersonFill />
            </div>
            <p>Login</p>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Top;