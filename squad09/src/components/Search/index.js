import './style.css';

function Seach() {
    return (
        <header>
            <div className='ListMain'>
                <div className='header' >
                    <p className='hastag'>hashtag<span className='Find'>finder</span></p>
                    <div className='buttons'>
                        <button className='buttonHome'>Home</button>
                        <button className='buttonHeader'>sair</button>
                    </div>

                </div>

                <div className='ListTitle'>Buscas Realizadas</div>
                <div className='ListTable'>

                    <container className='ListContainer'>

                        <div className='ListColumns'>
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
export default Seach;