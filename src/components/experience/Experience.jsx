import React from 'react'
import './experience.css'
import Tech from './Tech'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frondend"> 
        <h3>FrondEnd Develoment</h3>
        <div className="experience__content">
          
        
        <Tech tec='HTML' exp='Advance'/>
        <Tech tec='CSS' exp='Intermediate'/>
        <Tech tec='JavaScript' exp='Intermediate'/>
        <Tech tec='BootStrap' exp='Basic'/>
        <Tech tec='React' exp='Intermediate'/>
        </div>
        </div>
        <div className="experience__frondend"> 
        <h3>BackEnd Develoment</h3>
        <div className="experience__content">
        <Tech tec='Node JS' exp='Intermediate'/>
        <Tech tec='Express' exp='Intermediate'/>
        <Tech tec='MySql' exp='Intermediate'/>
        <Tech tec='Java Spring' exp='Basic'/>
        </div>
        </div>
      </div>      
    </section>
  )
}

export default Experience