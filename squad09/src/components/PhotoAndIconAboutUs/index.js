import './style.css';
function PhotoAndIconAboutUs(props){
  return(
    <>
    {
      props.aboutUs.map((item, index) => <div className="aboutBox"  key={index}>
        <div className="aboutBoxImage">
          <img src={item.img} alt={item.name} className="aboutImage"/>
        </div>
        <div className="aboutName"><h2>{item.name}</h2></div>
        <div  className="aboutText"><p>{item.about}</p></div>
        <div className="aboutBoxIcon">
          <a href={item.github}>
            <img src= {item.iconGithub} alt= "github" className="iconImage"/>
          </a>
          <a href={item.email}>
            <img src= {item.iconEmail} alt= "github" className="iconImage"/>
          </a>
          <a href={item.linkedin}>
            <img src= {item.iconLinkedin} alt= "github" className="iconImage"/>
          </a>
        </div>
      

      </div>
    )}
  
    </>
  )
}
export default PhotoAndIconAboutUs;