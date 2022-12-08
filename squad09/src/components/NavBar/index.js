import React from "react";
import './style.css';

function Search() {
    return (
        <header>
                <div className='header' >
                    <p className='hastag'>hashtag<span className='Find'>finder</span></p>
                    <div className='buttons'>
                        <button className='buttonHome'>HOME</button>
                        <button className='buttonHeader'>SAIR</button>
                    </div>
                </div>
        </header>
    );
};
export default Search;