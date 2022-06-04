import React from 'react'
import './portfolio.css'
import indumensac from '../../assets/indumensac.png'
import hiermedic from '../../assets/hiermedic.jpg'
const Portfolio = () => {
  return (
    <section id='porfolio'>
      <h5>Projects</h5>
      <h2>PortFolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={indumensac} alt="" />
          </div>
          <h3>item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>GitHub</a>
            <a href="" className='btn'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={hiermedic} alt="" />
          </div>
          <h3>item title</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn'>GitHub</a>
            <a href="" className='btn'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio