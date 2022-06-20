import React from 'react'
import './experience.css'
import {IoMdCheckmark} from 'react-icons/io'
import Projects from './Projects'

const Experience = () => {
  return (
    <section id="experience">
    <h2> Experience</h2>
    
    <div className="frontend">
       <h3>My skills</h3>
      <div className="content_exp">
     
    

      <div className="limbaje">
         <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>HTML</h4>
      </article>
      <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>CSS</h4>
      </article>

      <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>Javascript</h4>
      </article>
     
      <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>C/C++</h4>
      </article>

      <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>JAVA</h4>
      </article>
      <article className="detalii">
        <IoMdCheckmark size={25}/>
        <h4>MS Office pack</h4>
      </article>
      </div>
      </div>
    </div>

    <Projects/>
    
    </section>
  )
}

export default Experience