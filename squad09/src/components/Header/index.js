import Logo from '../../assets/logo.svg'
import './style.css';

function Header(props){
  return(
    <div className='header'>
      <img src= { Logo } alt= "logo"/>
      {
        props.button.map( (item,index) => 
        <button key={index} className ={item.toLowerCase()}>
          <img src={props.x} alt={props.x}/>
          {item}
        </button> )
        
      }
    </div>
  )
}
export default Header;