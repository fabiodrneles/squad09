import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import './style.css';

function Header(props){
  return(
    <div className='headerTop'>
      <div className='headerLogo'>
        <Link to={'/'}>
          <img src= { Logo } alt= "logo"/>
        </Link>
      </div>
      {
        props.buttons.map( (item,index) =>  <div className='headerBtn'>
        <Link key={item.route} to={item.route} className="headerLink"
        >
          <button className={item.title.toLowerCase()} 
            style={
              {
                background: item.backgroundColor,
                width: '140px',
                height: '49px',
                color: item.textColor,
                display: "flex",  
                borderRadius: '25px',
                justifyContent: 'center',
                marginRight:'10px',
                alignItems: 'center',
                boxShadow: '0px 3px 6px var(--collor-button-dark)',
                border: 'none',
              }
         
            }>
            <img src={item.icon} alt={item.icon} 
              style={
                {
                  display:'flex',
                  justifyContent:'space-between',
                  marginRight: '6%',
                }
              }
            /> 
              {item.title}
          </button>
        </Link>
        </div>
      )}
    </div>
  )
}
export default Header;