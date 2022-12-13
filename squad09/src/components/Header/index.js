import Logo from '../../assets/logo.svg'
import './style.css';

function Header(props){
  return(
    <div className='header'>
      <img src= { Logo } alt= "logo"/>
      {
        props.button.map( (item,index) => <button key={index}>{item}</button> )
      }
    </div>
  )
}
export default Header;