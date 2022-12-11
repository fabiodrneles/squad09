import './style.css';
import IconHome from '../../assets/icon-home.svg'


function Header(props) {
  return (
    <div className='header'>
      <div className="Title-header">
        
          <h2>
            hashtag<span>finder</span>
          </h2>
          
      </div>
  
      {
        props.button.map((item, index) => <button className="button" key={index}><img src={IconHome} alt={IconHome} className="btnImgHome"/>{item}</button>)
      }
    </div>
  )
}
export default Header;