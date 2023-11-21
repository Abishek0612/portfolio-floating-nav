import React from 'react'
import './testimonials.css'
import daisy from '../../assets/testimonial/daisy.jpg'
import ehiz from '../../assets/testimonial/ehiz.jpg'
import lady from '../../assets/testimonial/lady.png'
import man from '../../assets/testimonial/man.png'
import mike from '../../assets/testimonial/mike.png'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const data = [
    {
      avatar: daisy,
      name: 'Daisy',
      review: 'This guy performed in all aspects excellently. They have given well-appreciated discounts at various stages of the project and also with suggestions that saved cost. When it comes to delivering, they were always ahead of time. We don’t know how they do that but that’s very impressive. Their agility and customer support is on a different level, well appreciated.'
    },
    {
      avatar: ehiz,
      name: 'Ehiz',
      review: 'I would highly recommend this guy for his good work'
    },
    {
      avatar: lady,
      name: 'Rachel',
      review: 'This guy who made my portfolio to look Wowie '
    },
    {
      avatar: man,
      name: 'Jack',
      review: 'Need to thank him for his work'
    },
    {
      avatar: mike,
      name: 'Mike',
      review: 'Need to appreciate for his work. Thanks man!!'
    },
  ]

  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container  testimonials__container" 
           // install Swiper modules
      modules={[ Pagination, ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className='client__avatar'>
              <img src={avatar} alt='avatar' />
            </div>
            <h5>{name}</h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials