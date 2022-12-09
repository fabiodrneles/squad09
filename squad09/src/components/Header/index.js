import Logo from '../../assets/logo.svg'
import './style.css';

function Header(props){
  return(
    <div className='header'>
      <img className="Logo" src= { Logo } alt= "logo"/>
      {
        props.button.map( (item,index) => <button className="button" key={index}>{item}</button> )
      }
    </div>
  )
}
export default Header;