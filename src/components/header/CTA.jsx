import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={CV} download className='btn'>Download CV English</a>
            <a href="" className='btn'>Download CV Spanish</a>
            <a href="" className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>
  )
}

export default CTA