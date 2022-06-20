import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './socials'
const Header = () => {
  return (
    <header>
        <div className="container header_container "id='home'>
            <h5>Hello I'm</h5>
            <h1 className='typewriter'>Robert Buta</h1>
            <h5 className="text-light"> pleased you are here :D</h5>
            <CTA/>
            <HeaderSocials/>
            <a href="#contact" className="scroll_down">Scroll Down</a>

        </div>
    </header>
  )
}

export default Header