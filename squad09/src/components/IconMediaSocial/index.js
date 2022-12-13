import './style.css';
function IconMediaSocial(props){
  return(
    <>
     { props.iconsImg.map((item,index)=> <div className="aboutBoxIcon" key={index}>
           <a href={item.github}>
             <img src= {item.iconGithub} alt= "github" className="iconImage"/>
           </a>
           <a href={item.email}> 
             <img src= {item.iconEmail} alt= "envelope" className="iconImage"/>
           </a>
           <a href={item.linkedin}>
             <img src= {item.iconLinkedin} alt= "linkedin" className="iconImage"/>
           </a>
         </div>
       )}
    
    </>
  )
}

export default IconMediaSocial;