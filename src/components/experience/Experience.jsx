import React from 'react'
import './experience.css'
import VerifiedIcon  from '@mui/icons-material/Verified';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container  experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
              <div>
              <h4>HTML 5</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
              <div>
              <h4>CSS 3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>JavaScript 5</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>Bootstrap </h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>Material UI </h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>React</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>
        {/* End of frontend */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
<div>
<h4>MongoDb </h4>
              <small className='text-light'>Experienced</small>
</div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
             <div>
             <h4>Sqlyte </h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon' />
              <div>
              <h4>Firebase </h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience