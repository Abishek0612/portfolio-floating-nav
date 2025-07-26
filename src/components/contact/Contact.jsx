import React from "react";
import { motion } from "framer-motion";
import "./contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26ddlef",
        "template_8sr36jh",
        form.current,
        "3TMIj2BmlQ_qzjn91"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <motion.div
        className="contact__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </motion.div>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.article
            className="contact__option"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MailOutlineIcon className="contact__option-icon" />
            <h4>Email</h4>
            <h5>uabishek.dev@gmail.com</h5>
            <a
              href="mailto:uabishek.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </motion.article>

          <motion.article
            className="contact__option"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <WhatsAppIcon className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7550259062</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917550259062"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </motion.article>

          <motion.article
            className="contact__option"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <InstagramIcon className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>mernstackdeveloperabi</h5>
            <a
              href="https://www.instagram.com/mernstackdeveloperabi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </motion.article>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="form__group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
          </motion.div>

          <motion.div
            className="form__group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </motion.div>

          <motion.div
            className="form__group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="contact__btn"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="btn__text">Send Message</span>
            <MailOutlineIcon className="btn__icon" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
