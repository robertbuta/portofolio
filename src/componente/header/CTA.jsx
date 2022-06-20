import React from 'react'
import CV from '../../assets/Robert_Buta_CV.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA