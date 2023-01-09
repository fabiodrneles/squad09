import React from 'react';
import './style.css';
import HomeIcon from '../../assets/icon-home.svg';
import OffIcon from '../../assets/icon-power-off.svg'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react';


function Seach() {
    const [lista, setLista] = useState([])
    const [currentPage, setCurrentPage] = useState(0);

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

    useEffect(() => {
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/buscas?filterByFormula=({Squad} = '09-22')", {
        headers: {
            Authorization: "Bearer keymkBEBt2FCf4w3w"
        }
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=Find(%2209-22%22%2C+Squad)', 
      { 
        method: "GET", 
        headers: { 
          "Authorization": `Bearer keymkBEBt2FCf4w3w`, 
        } 
      })
      .then(function (res) { return res.json(); })
      .then(function (data) { 
       console.log("Deu certo")
        setCurrentPage([
          {
            //   _hashtag: data.filds.Hashtag,
            //   get hashtag() {
            //       return this._hashtag;
            //   },
            //   set hashtag(value) {
            //       this._hashtag = value;
            //   },
            // _data: data.fields.Data,
            // get Data(){
            //     return this._data;
            // },

            // _hora: data.fields.Hora,
            // get Hora(){
            //     return this._hora;
            // }


          },
         
        ])
      })
    },[])
//FORMATAR A DATA
    function formataData(data) {
        let novaData = new Intl.DateTimeFormat("pt-br", {
            day: "2-digit",
            month: "2-digit",
        }).format(data);
        return novaData;
    }
//FORMATAR HORA
    function formataHora(hora) {
        let novaHora = new Intl.DateTimeFormat("pt-br", {
            hour: "numeric",
            minute: "numeric",
        }).format(hora);
        return novaHora;
    }

    return (
        <header className='pageSearch'>
            <div className='ListMain ,mobile'>
                <Header buttons={buttonStyles} />

                <div className='ListTitle'>Buscas Realizadas</div>
                <div className='ListTable'>

                    <div id='ListContainer'>

                        <div className='HeaderTable'>
                            <p className='hashTagColumn'>HashTag</p>
                            <p className='dateColumn'>Data</p>
                            <p className='hourColumn'>Hora</p>
                        </div>
                            {lista.map((user, i) => (
                                
                                <ul className='ListHastags' key={i}>
                                    <li className='ListMarcadores'>{user.fields.Hashtag}</li>
                                    <li className='dateColumns'>{formataData(user.fields.Data)}</li>
                                    <li className='hourColumns'>{formataHora(user.fields.hora)}</li>
                                    <hr className='Line'></hr>
                                </ul>
                                    
                            ))}
                    </div>

                </div>
            </div>
            <Footer />
        </header>
    );
};
export default Seach;