import React from 'react'
import eu from '../../assets/eu.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import './about.css'
const About = () => {
  return (
    <section id="about">
     
      <h5>Get to know something</h5>
      <h2>About me</h2>
     <div id='space'>  </div>
  <div className="container about_container">
    <div className="about_me">
       <div className="about_me_image">
         <img src={eu} alt=""/>
       </div>
    </div>

    <div className="about_content">
      <div className="about_cards">
        <article className="card">
          <a href="#" className='icon'><FaGraduationCap size={20}/></a>
          <h5>National College "Andrei Muresanu" Bistrita</h5>
         
          <h5>Profile: Mathematical Informatics</h5>
           <small >2015-2019</small>
        </article>
        <article className="card">
          
          <a href="" className='icon'><BiUser size={20}/></a>
          <h5>UTCN - ETTI</h5>
          
          <h5>Specialization: Applied Electronics</h5>
          <small>2019-present</small>
        </article>
        <div className="text">
    <p className="description"> Hello! As you can see my name is Robert and I am 22 years old. I am currently a student at the Technical University of Cluj-Napoca in the Faculty of Telecommunications, Electronics, and Information Technology. 
  My goal is to pursue my career in the IT field, mainly in software development because it is easy for me to learn and understand how to code. Some of my passions apart from technology are music, video games, and sports and I like collecting things that are related to them like football shirts (especially the retro ones) or vinyl records.
  </p>
      </div>
      
    </div>
   
    </div>
    </div>
    
    </section>
  )
}

export default About