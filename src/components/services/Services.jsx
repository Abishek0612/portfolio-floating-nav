import React from 'react'
import './services.css'
import CheckIcon from '@mui/icons-material/Check';

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className='service'>
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <CheckIcon className='service_list-icon' />
                <p>Website for Business</p>
              </li>
              <li>
                <CheckIcon className='service_list-icon' />
                <p>Student Portfolio</p>
              </li>
              <li>
                <CheckIcon className='service_list-icon' />
                <p>E-commerce Website</p>
              </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services