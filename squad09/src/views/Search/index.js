import React from 'react';
import './style.css';
import HomeIcon from '../../assets/icon-home.svg';
import OffIcon from '../../assets/icon-power-off.svg'
import Header from "../../components/Header";
import Footer from '../../components/Footer'

function Seach() {
    const buttonStyles = [
        {
            title: "HOME",
            icon: HomeIcon,
            route: "/",
            textColor: "#0A1744",
            backgroundColor: "#72EFDB",
        },
        {
            title: "SAIR",
            icon: OffIcon,
            route: "/login",
            textColor: "#FFF",
            backgroundColor: "#1E3E7B",
        },
    ]
    return (
        <header className='pageSearch'>
            <div className='ListMain ,mobile'>
                <Header buttons={buttonStyles} />

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
                    </container>
                </div>
            </div>
            <Footer/>
        </header>
    );
};
export default Seach;