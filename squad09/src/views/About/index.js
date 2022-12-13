import React from "react";
import './style.css';
import Header from "../../components/Header";
import IconIlustration from '../../assets/about-ilustration.svg';
import IconMarcia from '../../assets/marcia.jpeg';
import IconDaniel from '../../assets/daniel.jpeg';
import IconFabio from '../../assets/fabio.jpeg';
import IconLeidy from '../../assets/leidy.jpeg';
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
      about: 'Desenvolvedor Front End HTML5 | CSS | JAVASCRIPT | REACT.JS ',
      img: IconDaniel,
      email: 'nogueira.dan07@gmail.com',
      github: 'https://github.com/DanielNogueiraOliveira',
      linkedin: 'https://www.linkedin.com/in/daniel-nogueira-6ba2711b0/'
    
    },
    {
      name: 'Fabio Dorneles',
      about: 'Desenvolvedor Full Stack REACT.JS | SPRING | ANDROID | JAVA | COBOL ',
      img: IconFabio,
      email: 'fabiodrneles@gmail.com',
      github: 'https://github.com/fabiodrneles',
      linkedin: 'https://www.linkedin.com/in/fabiodrneles/',
    },
    {
      name: 'Leidy Olinto',
      about: 'Desenvolvedora Front End   HTML | GIT | CSS | JAVASCRIPT| REACT.JS ',
      img: IconLeidy,
      email:'suverleide.olinto@gmail.com',
      github: 'https://github.com/LeidyOlinto',
      linkedin: 'https://www.linkedin.com/in/leidy-olinto-356b9391/'
    },
    {
      name: 'Marcia Oliveira',
      about: 'Desenvolvedora Front End HTML | CSS | JAVASCRIPT | VUE.JS | REACT.JS',
      img: IconMarcia,
      email: 'bmg.olivier@gmail.com',
      github: 'https://github.com/marciadeoliveira',
      linkedin: 'https://www.linkedin.com/in/marcia-b-oliveira/'
    },
  ]
  return(
    <>
    <div className="containerAbout">
      <div className="headerAbout">
        <div className="headerImg">
          <img src= {IconLogo} alt= "logo" className="imgLogo"/>
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
          {
            aboutUs.map((item, index) => <div className="aboutBox"  key={index}>
              <div className="aboutBoxImage">
                <img src={item.img} alt={item.name} className="aboutImage"/>
              </div>
              <div className="aboutName"><h2>{item.name}</h2></div>
              <div  className="aboutText"><p>{item.about}</p></div>
              <div className="aboutBoxIcon">
                <a href={item.github} target='_blank'>
                  <img src= {IconGithub} alt= "github" className="iconImage"/>
                </a>
                <a href={item.email} target='_blank'> 
                  <img src= {IconEnvelope} alt= "envelope" className="iconImage"/>
                </a>
                <a href={item.linkedin} target='_blank'>
                  <img src= {IconLinkedin} alt= "linkedin" className="iconImage"/>
                </a>
              </div>

            </div>
          )}
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