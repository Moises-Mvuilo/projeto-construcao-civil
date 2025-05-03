
import { useState } from 'react';
//Impoprtação de links
import {Link} from 'react-router-dom'

//ASSETS
import Logo from '../../assets/logo.png'
import './Header.css';

//COMPONENTS
import Button from '../Button/Button';


function Header () {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen (!isOpen);
  }
  return (
    <header>
        <div className="container">
            <div className="al-center d-flex jc-space-between">
                <Link to='/'><img src={Logo} width="150px" loading='lady' /></Link>
                <div className="mobile-menu" onClick={(toggleMenu)}>
                  <Button buttonstyle="secondary">MENU</Button>
                </div>
                <nav className= {`${isOpen ? 'open' : ''}`}>
                  <Button className="mobile-menu close-btn" onClick={(toggleMenu) /*=> setIsOpen(!isOpen)*/}>X</Button>
              <ul className='d-flex '>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/Projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </nav>
            </div>

        </div>
    </header>
  )
}

export default Header