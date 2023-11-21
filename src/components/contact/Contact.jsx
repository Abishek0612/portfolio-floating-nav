import React from 'react'
import './contact.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26ddlef', 'template_8sr36jh', form.current, '3TMIj2BmlQ_qzjn91')
      
      e.target.reset()
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className="contact__options">
            <article className="contact__option">
              <MailOutlineIcon className='contact__option-icon' />
                <h4>Email</h4>
                <h5>uabishek6@gmail.com</h5>
                <a href='mailto:uabishek6@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <WhatsAppIcon className='contact__option-icon' />
                <h4>WhatsApp</h4>
                <h5>+91 7550259062</h5>
                <a href="https://api.whatsapp.com/send?phone=+917200084715" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <InstagramIcon className='contact__option-icon' />
                <h4>Instagram</h4>
                <h5>mernstackdeveloperabi</h5>
                <a href="https://www.instagram.com/mernstackdeveloperabi/" target='_blank'>Send a message</a>
            </article>
          </div>

          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
              <input type="text"  name='name' placeholder='Your Full Name' required />
              <input type="email"  name='email' placeholder='Your Email ' required />
              <textarea  name='message' rows='7' placeholder='Your Message' required ></textarea>
              <button type='submit' id='send' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact