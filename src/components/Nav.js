import React, {useState} from 'react'
import logo from '../assets/securekloud.png';

const Nav = () => {
    const [menushow,setmenushow] = useState('false');
    const toggleclass = ()=>{
        setmenushow(!menushow);
    }
  return (
    <nav>
        <div className={menushow?'navinnerWrapper':'navinnerWrapper show'}>
            <div className='sitelogo'>
                <img src={logo} alt="sitelogo" />
            </div>
            <ul className='navlist'>
                <li className='platforms'><a href='/platforms'>Platforms</a></li>
                <li className='services'><a href='/services'>Services</a></li>
                <li className='cesources'><a href='/resources'>Resources</a></li>
                <li className='Company'><a href='/company'>Company</a></li>
                <li className='contact'><a href='/contact-us'>Contact Us</a></li>
            </ul>
            <div className='hamburgermenu' onClick={toggleclass}>
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
        </div>
    </nav>
  )
}

export default Nav