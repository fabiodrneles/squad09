import React from "react";
import './style.css';

function NavBar () {
    return(
        <div className="NavWrapper">
            <nav className="NavHeader">
                <div>
                    <a href="/">
                        <h2>
                            "hashtag"
                            <span>finder</span>
                        </h2>
                    </a>
                </div>

                <div className="NavMenu">
                    <a href="/About">
                        <button className="aboutBtn">
                            <img src="" alt="info-icon"/>
                            "Sobre"
                        </button>
                    </a>
                    <a href="Login">
                        <button className="aboutBtn">
                            <img src="" alt="info-icon"/>
                            "Login"
                        </button>
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default NavBar;