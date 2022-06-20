import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
<>
<footer>

    <a href="" className="footer_logo">RobertButa</a>
        <ul className='permalinks'>
            <li><a href="#home"></a>Home</li>
            <li><a href="#about"></a>About</li>
            <li><a href="#experience"></a>Experience</li>
            <li><a href="#contact"></a>Contanct</li>


        </ul>

        <div className="footer_socials">
        <a href="https://www.linkedin.com/in/robert-buta-15b977230/" target="_blank"><ImLinkedin size={25}/></a>
        <a href="https://github.com/robertbuta" target="_blank"><FaGithub size={25}/></a>
        <a href="https://www.facebook.com/RobertButa1406/" target="_blank"><FaFacebook size={25}/></a>
        <a href="https://www.instagram.com/robert.buta/"><FaInstagram size={25}/></a>
        </div>

    <div className="footer_copy">
        <small>&copy; Buta Robert. All rights reserved</small>
    </div>
</footer>
</>
  )
}

export default Footer