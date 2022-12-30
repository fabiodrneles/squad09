import React, {useEffect,useState} from "react";
import './style.css';
import Header from "../../components/Header";
import PhotoAndIconAboutUs from "../../components/PhotoAndIconAboutUs";
import IconIlustration from '../../assets/about-ilustration.svg';
import IconGithub from '../../assets/icon-github.svg';
import IconEnvelope from '../../assets/icon-envelope.svg';
import IconLinkedin from '../../assets/icon-awesome-linkedin.svg';
import IconHome from '../../assets/icon-home.svg';
import IconLogin from '../../assets/icon-user-alt.svg';
import Footer from "../../components/Footer";

function About(){
  const [aboutProject, setAboutProject] = useState();
  const [aboutUs, setAboutUs] = useState([]);
  const buttonStyles =[
    {
      title: "HOME",
      icon: IconHome,
      route: "/",
      textColor: "#0A1744",
      backgroundColor: "#72EFDB",
    },
    {
      title: "LOGIN",
      icon: IconLogin,
      route: "/login",
      textColor: "#FFF",
      backgroundColor: "#1E3E7B",
    },
  ]
  useEffect(() => {
    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=Find(%2209-22%22%2C+Squad)',
      {
        method: "GET",
        headers: {
        Authorization:'Bearer keyz8BAZKCTGY5dB1',
        },
      }
    )
    .then(function (res) { return res.json(); })
    .then(function (data) { 
      setAboutProject(data.records[0].fields.Sobre)
    })
    .catch((erro) => console.log(erro));

    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=Find(%2209-22%22%2C+Squad)', 
      { 
        method: "GET", 
        headers: { 
          "Authorization": `Bearer keyz8BAZKCTGY5dB1`, 
        } 
      })
      .then(function (res) { return res.json(); })
      .then(function (data) { 
        console.log(data.records[3].fields, 'linkedin')
        setAboutUs([
          {
            name: data.records[3].fields.Nome,
            about: data.records[3].fields.Descrição,
            img: data.records[3].fields.Imagem[0].url,
            email: data.records[3].fields.Email,
            github: data.records[3].fields.Github,
            linkedin: data.records[3].fields.LinkedIn,
            iconGithub: IconGithub,
            iconEmail: IconEnvelope,
            iconLinkedin: IconLinkedin,
          },
          {
            name: data.records[1].fields.Nome,
            about: data.records[1].fields.Descrição,
            img: data.records[1].fields.Imagem[0].url,
            email: data.records[1].fields.Email,
            github: data.records[1].fields.Github,
            linkedin: data.records[1].fields.LinkedIn,
            iconGithub: IconGithub,
            iconEmail: IconEnvelope,
            iconLinkedin: IconLinkedin,
          }, 
          {
            name: data.records[0].fields.Nome,
            about: data.records[0].fields.Descrição,
            img: data.records[0].fields.Imagem[0].url,
            email: data.records[0].fields.Email,
            github: data.records[0].fields.Github,
            linkedin: data.records[0].fields.LinkedIn,
            iconGithub: IconGithub,
            iconEmail: IconEnvelope,
            iconLinkedin: IconLinkedin,
          }, 
          {
            name: data.records[2].fields.Nome,
            about: data.records[2].fields.Descrição,
            img: data.records[2].fields.Imagem[0].url,
            email: data.records[2].fields.Email,
            github: data.records[2].fields.Github,
            linkedin: data.records[2].fields.LinkedIn,
            iconGithub: IconGithub,
            iconEmail: IconEnvelope,
            iconLinkedin: IconLinkedin,
          },
        ])
      })
    },[])
  return(
    <div className="containerAbout">
      <Header buttons={buttonStyles}/> 
      <div className="about">
        <div className="aboutProject">
          <div className="aboutProjectTitle">
            <h1>Sobre o projeto</h1>
          </div>
          <div className="projectText">
            <p>{aboutProject}</p>
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
      <Footer/>
    </div>
  )
}
export default About;