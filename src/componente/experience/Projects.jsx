import React from 'react'
import pozaP1 from '../../assets/drink.jpg'
import nothing from '../../assets/negru.png'
const Projects = () => {
  return (
   <section id='projects'>

    <h5>My work</h5>
    <h2>Portofolio</h2>

    <div className="container projects_container">

        <article className="project_item">
            <div className="project_image">
                <img src={pozaP1} alt="" />
            </div>
            <h3>The Brewery</h3>
            <div className="proj_link">
                <a href="https://robertbuta.github.io/brew/" target='blank' className='btn btn-primary'>live demo</a>
                <a href="https://robertbuta.github.io/brew/" target='blank' className='btn'>github</a>
                </div>

        </article>
        
        <article className="project_item">
            <div className="project_image">
                <img src={nothing} alt="" />
            </div>
            <h3>to be added</h3>
            <div className="proj_link"><a href="" className='btn btn-primary'>live demo</a>
            <a href="" target='blank' className='btn'>github</a></div>

        </article>
        
        <article className="project_item">
            <div className="project_image">
                <img src={nothing} alt="" />
            </div>
            <h3>to be added</h3>
            <div className="proj_link">
                <a href="" className='btn btn-primary'>live demo</a>
                <a href="" target='blank' className='btn'>github</a></div>

        </article>

    </div>

   </section>
  )
}

export default Projects