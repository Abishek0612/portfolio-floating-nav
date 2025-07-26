import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const resumeLink = "/Abishek_Resume.pdf";

  return (
    <div className="cta">
      <motion.a
        href={resumeLink}
        download="Abishek_U_Resume.pdf"
        className="btn"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(77, 181, 255, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(77, 181, 255, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
