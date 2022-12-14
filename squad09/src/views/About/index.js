import React from "react";
import './style.css';
import Header from "../../components/Header";
import PhotoAndIconAboutUs from "../../components/PhotoAndIconAboutUs";
import IconIlustration from '../../assets/about-ilustration.svg';
import IconMarcia from '../../assets/marcia.jpeg';
import IconDaniel from '../../assets/daniel.jpeg';
import IconFabio from '../../assets/fabio.jpeg';
import IconLeidy from '../../assets/leidy.jpeg';
import IconGithub from '../../assets/icon-github.svg';
import IconEnvelope from '../../assets/icon-envelope.svg';
import IconLinkedin from '../../assets/icon-awesome-linkedin.svg';
import IconAbout from '../../assets/icon-info-circle.svg'
import IconLogin from '../../assets/icon-user-alt.svg'

function About(){
  const buttonStyles =[
    {
      title: "SOBRE",
      icon: IconAbout,
      route: "/about",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    },
    {
      title: "LOGIN",
      icon: IconLogin,
      route: "/login",
      textColor: "#FFF",
      backgroundColor: "#0B1A49",
    },
  ]
  const aboutUs= [
    {
      name: 'Daniel Oliveira',
      about: 'Desenvolvedor Front End HTML5 | CSS | JAVASCRIPT | REACT.JS ',
      img: IconDaniel,
      email: 'nogueira.dan07@gmail.com',
      github: 'https://github.com/DanielNogueiraOliveira',
      linkedin: 'https://www.linkedin.com/in/daniel-nogueira-6ba2711b0/',
      iconGithub: IconGithub,
      iconEmail: IconEnvelope,
      iconLinkedin: IconLinkedin,
      
    },
    {
      name: 'Fabio Dorneles',
      about: 'Desenvolvedor Full Stack REACT.JS | SPRING | ANDROID | JAVA | COBOL ',
      img: IconFabio,
      email: 'fabiodrneles@gmail.com',
      github: 'https://github.com/fabiodrneles',
      linkedin: 'https://www.linkedin.com/in/fabiodrneles/',
      iconGithub: IconGithub,
      iconEmail: IconEnvelope,
      iconLinkedin: IconLinkedin,
    },
    {
      name: 'Leidy Olinto',
      about: 'Desenvolvedora Front End   HTML | GIT | CSS | JAVASCRIPT| REACT.JS ',
      img: IconLeidy,
      email:'suverleide.olinto@gmail.com',
      github: 'https://github.com/LeidyOlinto',
      linkedin: 'https://www.linkedin.com/in/leidy-olinto-356b9391/',
      iconGithub: IconGithub,
      iconEmail: IconEnvelope,
      iconLinkedin: IconLinkedin,
    },
    {
      name: 'Marcia Oliveira',
      about: 'Desenvolvedora Front End HTML | CSS | JAVASCRIPT | VUE.JS | REACT.JS',
      img: IconMarcia,
      email: 'bmg.olivier@gmail.com',
      github: 'https://github.com/marciadeoliveira',
      linkedin: 'https://www.linkedin.com/in/marcia-b-oliveira/',
      iconGithub: IconGithub,
      iconEmail: IconEnvelope,
      iconLinkedin: IconLinkedin,
    },
  ]
  return(
    <>
    <div className="containerAbout">
      <div className="headerAbout">
        <Header buttons={buttonStyles}/> 
      </div>
      <div className="about">
        <div className="aboutProject">
          <div className="aboutProjectTitle">
            <h1>Sobre o projeto</h1>
          </div>
          <div className="projectText">
            <p>
              Certamente, você já encontrou a palavra engajamento em diferentes contextos, 
              e nós alunos da NewTab Academy estamos engajados em te proporcionar ferramentas 
              que otimizem suas buscas de maneira assertiva.
            </p>
            <p>
              Aqui no hashtagfinder, você acessa de forma rápida e simples as hashs mais comentadas do Twitter, 
              garantindo assim maior interação em suas postagens, além de monitorar o crescimento de suas próprias 
              hashes personalizadas e te deixar por dentro das maiores novidades, e tudo isso de forma gratuita.
            </p>
          </div>
        </div>
        <div className="aboutIlustration">
          <img src= {IconIlustration} alt= "ilustração" className="IlustrationImage"/>
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutTitle">
          <h1>Quem somos</h1>
        </div>
        <div className="aboutUsBox">
          <PhotoAndIconAboutUs aboutUs={aboutUs}/>
        </div>
      </div>
      <div className="aboutFooter">
        <p>@Cocreare 2022. Todos os direitos reservados</p>
      </div> 
    </div>
    </>
  )
}
export default About;