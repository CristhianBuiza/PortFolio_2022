import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
const Tech = ({tec, exp}) => {
  return (
    <article className='experience__details'>
    <BsCheckCircleFill className='experience__details-icon'/>
    <div>
        <h4>{tec}</h4>
        <small className='text-light'>{exp}</small>
    </div>
    </article>
  )
}

export default Tech