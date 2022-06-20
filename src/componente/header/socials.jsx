import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

function socials() {
  return (
    <>
   <div className="header_socials">
   <a href="https://www.linkedin.com/in/robert-buta-15b977230/" target="_blank"><ImLinkedin size={25}/></a>
   <a href="https://github.com/robertbuta" target="_blank"><FaGithub size={25}/></a>
   <a href="https://www.facebook.com/RobertButa1406/" target="_blank"><FaFacebook size={25}/></a>
   <a href="https://www.instagram.com/robert.buta/"><FaInstagram size={25}/></a></div>
    </>
  )
}

export default socials