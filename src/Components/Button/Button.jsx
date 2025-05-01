
import WhiteArrow from '../../assets/white-arrow.svg';
import './Button.css';

function Button ({arrow, buttonstyle, children, ...props}) {
  return (
    <button className= {`button ${buttonstyle}`} {...props}>
        {children} {arrow && <img src={WhiteArrow} /> }
    </button>
  )
}

export default Button