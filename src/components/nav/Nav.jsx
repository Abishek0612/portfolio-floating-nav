import React from 'react'
import './nav.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ""} ><HomeOutlinedIcon /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={ activeNav === '#about' ? 'active' : ""} ><PersonOutlineOutlinedIcon /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}  className={ activeNav === '#experience' ? 'active' : ""}><BookmarkBorderOutlinedIcon /> </a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={ activeNav === '#services' ? 'active' : ""}><MiscellaneousServicesOutlinedIcon /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={ activeNav === '#contact' ? 'active' : ""}><MailOutlineOutlinedIcon /> </a>
    </nav>
  )
}

export default Nav