import React from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/img1.jpg";
import HeaderSocials from "./HeaderSocials";
import ParticleBackground from "../threejs/ParticleBackground";

const Header = () => {
  return (
    <header>
      <ParticleBackground />
      <div className="container header__container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h5>Hello I'm</h5>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Abishek U
          </motion.h1>
          <h5 className="text-light">
            Full Stack Developer | MERN Stack Expert | AI Enthusiast
          </h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <CTA />
        </motion.div>

        <HeaderSocials />

        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <img src={ME} alt="me" />
        </motion.div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
