import React from 'react'
import './about.css'
import ME from '../../assets/cover-profile.jpg'
import GroupIcon from '@mui/icons-material/Group';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import FolderIcon from '@mui/icons-material/Folder';


const About = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About ' />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <MilitaryTechIcon className='about__icon' />
              <h5>Experience</h5>
              <small>8 months</small>
            </article>
            <article className='about__card'>
              <GroupIcon className='about__icon' />
              <h5>Clients</h5>
              <small>2+ company clients</small>
            </article>
            <article className='about__card'>
              <FolderIcon className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I'm a junior software developer with 3 months of experience and i have worked in a product based company. My tech skills are React js, Node js , Mongo db  i can even say my self as MERN Stack Developer and i am ready to learn new tech skills and upgrade my knowledge and skills
          </p>
          <a href='#contact' id='btn' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About