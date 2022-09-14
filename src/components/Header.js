import React from 'react'
import headerimage from '../assets/header_image.png';

const Header = () => {
  return (
    <header>
        <div className='leftWrapper'>
            <div className='leftinnerWrapper'>
                <div className='header_title'>
                Innovate With Power
                </div>
                <div className='header_subtext'>
                We leverage next-gen technologies to make your digital transformation journey smarter, faster, and secure.
                </div>
                <div className='header_btn'>
                    <button>Talk to our Cloud Experts</button>
                </div>
            </div>
        </div>
        <div className="rightWrapper">
            <img src={headerimage} alt='header_image'></img>
        </div>
    </header>
    
  )
}

export default Header