import React from 'react'
import './nav.css'
import {BiHomeSmile, BiUserCircle} from 'react-icons/bi'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {MdOutlineDesignServices, MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={activeNav === '#about' ? 'active':''}><BiUserCircle/></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === '#experience' ? 'active':''}><BsJournalBookmarkFill/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={activeNav === '#contact' ? 'active':''}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav