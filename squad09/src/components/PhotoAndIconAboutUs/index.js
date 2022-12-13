import IconMediaSocial from "../IconMediaSocial"
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
        <IconMediaSocial iconsImg={ props.iconsImg}/>
      </div>
    )}
  
    </>
  )
}
export default PhotoAndIconAboutUs;