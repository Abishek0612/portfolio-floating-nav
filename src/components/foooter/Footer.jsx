import React from 'react'
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ABISHEK</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a> </li>
        <li><a href='#about'>About</a> </li>  
        <li><a href='#experience'>Experience</a> </li>
        <li><a href='#services'>Services</a> </li>
        <li><a href='#portfolio'>Portfolio</a> </li>
        <li><a href='#testimonials'>Testimonials</a> </li>
        <li><a href='#contact'>Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/mernstackdeveloperabi/' target="_blank">
          <InstagramIcon />
        </a>
        <a href='https://twitter.com/home' target="_blank">
          <TwitterIcon />
        </a>
        <a href='https://www.linkedin.com/feed/' target="_blank">
          <LinkedInIcon />
        </a>
        <a href='https://github.com/' target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ABISHEK Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer