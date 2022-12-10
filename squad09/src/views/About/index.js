import React, { useState } from "react";
import './style.css';
import Header from "../../components/Header";
import Ilustration from '../../assets/about-ilustration.svg';
import Marcia from '../../assets/marcia.jpeg';
import Github from '../../assets/icon-github.svg';
import Envelope from '../../assets/icon-envelope.svg';
import Linkedin from '../../assets/icon-awesome-linkedin.svg';

function About(){
  const [buttonName, setButtonName] = useState(['Sobre', 'Login'])
  const [aboutUs, setAboutUs] = useState([
    {
      name: 'Daniel Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: Marcia
    },
    {
      name: 'Fabio Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: Marcia
    },
    {
      name: 'Leidy Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: Marcia
    },
    {
      name: 'Marcia Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: Marcia
    },
  ])
  return(
    <>
      <div className="containerAbout">
        <Header button={buttonName}/>
        <div className="about">
          <div className="aboutProject">
            <div className="aboutProjectTitle">
              <h1>Sobre o projeto</h1>
            </div>
            <div className="projectText">
              <p>
              Lorem ipsum dolor sit amet. Sit minus laboriosam eos assumenda nesciunt cum 
              tempore quod aut Quis culpa et officia voluptatibus aut vero mollitia non 
              perspiciatis numquam. Nam maiores eaque aut saepe repellendus a ipsa dicta 
              aut possimus quia aut quae sint in quisquam magnam ab repudiandae voluptas. 
              Id molestias omnis sit iste voluptates id expedita eveniet et voluptas suscipit 
              cum nisi nulla.
              </p>
            </div>
          </div>
          <div className="aboutIlustration">
            <img src= { Ilustration } alt= "ilustração" className="IlustrationImage"/>
          </div>
        </div>
        <div className="aboutUs">
          <div className="aboutTitle">
            <h1>Quem somos</h1>
          </div>
          <div className="aboutUsBox">
            {
              aboutUs.map(item => <div className="aboutBox">
                <div className="aboutBoxImage">
                  <img src={item.img} alt={item.name} className="aboutImage"/>
                </div>
                <div className="aboutName">
                  <h2>{item.name}</h2> 
                </div>
                <div>
                  <p>{item.about}</p>
                </div>
                <div className="aboutBoxIcon">
                  <img src= { Github } alt= "github" className="iconImage"/>
                  <img src= { Envelope } alt= "envelope" className="iconImage"/>
                  <img src= { Linkedin } alt= "github" className="iconImage"/>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default About;