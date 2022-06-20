import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdSchool} from 'react-icons/io'
import {IoIosChatbubbles} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
    return (
   <>
   <nav>
    <a href="#home"  onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}><FaHome size={25}/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><HiOutlineUserCircle size={25}/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><IoMdSchool size={25}/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><IoIosChatbubbles size={25}/></a>


   </nav>
   </>
  )
}

export default Nav