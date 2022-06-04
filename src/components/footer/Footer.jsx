import React from 'react'
import './footer.css'
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Cristhian Buiza</a>
      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/cristhianbuiza/"><BsFacebook/></a>
        <a href="https://www.instagram.com/cristhian_buiza/"><BsInstagram/></a>
        <a href="https://github.com/CristhianBuiza"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Cristhian Buiza, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer