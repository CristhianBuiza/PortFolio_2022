import React from 'react'
import './about.css'
import MEABOUT from '../../assets/me-about.jpg'
import {MdWorkOutline} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEABOUT} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className='about__icon'/>
              <h5>Experiance</h5>
              <small>1+ Year Working</small>
            </article>
          
         
            <article className="about__card">
              <BsPeople className='about__icon'/>
              <h5>Clients</h5>
              <small>more than 3 clients</small>
            </article>
          
          
            <article className="about__card">
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>5 Projects completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto a numquam quas distinctio perspiciatis temporibus facere officiis aliquam fugiat odio? Dolores eum in ab et atque accusantium adipisci animi iure?
          </p>
          <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
      </div>
    </section>
  )
}

export default About