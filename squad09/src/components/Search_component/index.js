import React from 'react';
import './styless.css';
import { FaHome } from 'react-icons/fa';
import { CgLogOff } from 'react-icons/cg';


function SeachComponent() {
    return (
        <header>
            <div className='ListMain ,mobile'>


                {/* <div className='header' >
                    <p className='hastag'>hashtag<span className='Find'>finder</span></p>


                    <div className='buttons'>

                        <button className='buttonHome'>
                            <div className='iconeHome'>
                                <FaHome />
                            </div>  HOME
                        </button>
                        <button className='buttonHeader'>
                            <div className='iconeOff'>
                                <CgLogOff />
                            </div>  SAIR</button>
                    </div>

                </div> */}

                <div className='ListTitle'>Buscas Realizadas</div>
                <div className='ListTable'>

                    <container className='ListContainer'>

                        <div className='HeaderTable'>
                            <p className='hashTagColumn'>HashTag</p>
                            <p className='dateColumn'>Data</p>
                            <p className='hourColumn'>Hora</p>
                        </div>
                        <ul className='ListHastags'>
                            <li className='ListMarcadores'>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>

                        <ul className='ListHastags'>
                            <li className='ListMarcadores'>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li className='ListMarcadores'>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li className='ListMarcadores'>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>
                        <ul className='ListHastags'>
                            <li className='ListMarcadores'>#hastagname</li>
                            <li className='dateColumns'>25/02</li>
                            <li className='hourColumns'>09:35</li>
                        </ul>
                        <hr className='Line'></hr>

                    </container>

                </div>
            </div>
        </header>
    );
};
export default SeachComponent;