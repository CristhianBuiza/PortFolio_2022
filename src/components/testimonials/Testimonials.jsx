import React from 'react'
import './testimonials.css'
import dgcpubli from '../../assets/dgcpubli.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={dgcpubli} alt="dgcpublicidad" />
          </div>
          <h5>Reynaldo Lizarbe Rázuri</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, praesentium!
            </small>
        </article>
      </div>
    </section>
  )
}


export default Testimonials