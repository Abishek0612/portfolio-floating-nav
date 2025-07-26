import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import ME from "../../assets/cover-profile.jpg";
import GroupIcon from "@mui/icons-material/Group";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FolderIcon from "@mui/icons-material/Folder";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about__cards">
            <motion.article
              className="about__card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MilitaryTechIcon className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </motion.article>

            <motion.article
              className="about__card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GroupIcon className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Company Clients</small>
            </motion.article>

            <motion.article
              className="about__card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FolderIcon className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </motion.article>
          </div>

          <p>
            Motivated and detail-oriented Full Stack Developer with 2+ years of
            hands-on experience in designing, developing, and deploying scalable
            web applications using the MERN stack. Proven expertise in
            implementing role-based security, API integrations, and AI-driven
            solutions that enhance performance, data accuracy, and user
            engagement. Currently working as a Software Engineer at NewGen
            Technomate LLP, where I've successfully engineered role-based access
            control systems and built AI-powered document intelligence
            platforms.
          </p>

          <motion.a href="#contact" className="btn btn-primary">
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
