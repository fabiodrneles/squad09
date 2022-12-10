import React from "react";
import './style.css';
import Header from "../../components/Header";
import IconIlustration from '../../assets/about-ilustration.svg';
import IconMarcia from '../../assets/marcia.jpeg';
import IconGithub from '../../assets/icon-github.svg';
import IconEnvelope from '../../assets/icon-envelope.svg';
import IconLinkedin from '../../assets/icon-awesome-linkedin.svg';
import IconLogo from '../../assets/logo.svg'
import IconAbout from '../../assets/icon-info-circle.svg'
import IconLogin from '../../assets/icon-user-alt.svg'


function About(){
  const buttonName= ['SOBRE', 'LOGIN']
  const aboutUs= [
    {
      name: 'Daniel Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: IconMarcia
    },
    {
      name: 'Fabio Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: IconMarcia
    },
    {
      name: 'Leidy Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: IconMarcia
    },
    {
      name: 'Marcia Oliveira',
      about: 'fuibbbjeijfpodbeihtvdoyw  CBO IWHOICHENWPCHJEP  JCPO  JCPI  WJECPOJE  PO',
      img: IconMarcia
    },
  ]
  return(
    <>
    <div className="containerAbout">
      <div className="headerAbout">
        <div className="headerImg">
          <img src= { IconLogo } alt= "logo" className="imgLogo"/>
        </div>
        <div className="headerBtn">
          <button className="btnAbout"><img src={IconAbout} alt={IconAbout} className="btnImgAbout"/>SOBRE</button>
          <button className="btnLogin"><img src={IconLogin} alt={IconLogin} className="btnImgLogin"/>LOGIN</button>
        </div>
      </div>
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
            <img src= { IconIlustration } alt= "ilustração" className="IlustrationImage"/>
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
                  <img src= { IconGithub } alt= "github" className="iconImage"/>
                  <img src= { IconEnvelope } alt= "envelope" className="iconImage"/>
                  <img src= { IconLinkedin } alt= "github" className="iconImage"/>
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