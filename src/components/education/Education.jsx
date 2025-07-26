import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnimatedBook from "../threejs/AnimatedBook";

const Education = () => {
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSectionInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    const section = document.getElementById("education");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications (AI & ML)",
      institution: "Amity University Online",
      period: "06/2023 - 06/2025",
      status: "Completed",
    },
    {
      degree: "MBA – System Management",
      institution: "Madras University",
      period: "04/2021 - 05/2023",
      status: "Completed",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Madras University",
      period: "04/2016 - 05/2019",
      status: "Completed",
    },
  ];

  const projects = [
    {
      title: "Multimodal AI for Real-Time Sign Language Translation",
      type: "MCA Capstone Project",
      description:
        "Developed a real-time sign language translation system using computer vision and deep learning models, achieving 85% translation accuracy.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    },
    {
      title: "Impact of AI on B2B Software Development Profitability",
      type: "MBA Project",
      description:
        "Analyzed AI Integration Impact on B2B Software ROI, identifying 40% cost reduction opportunities and 60% faster development cycles.",
      technologies: ["Data Analysis", "Business Intelligence", "AI Strategy"],
    },
  ];

  return (
    <section id="education" className="education-section">
      {/* Centered Section Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h5>My Academic Journey</h5>
        <h2>Education & Projects</h2>

        {/* Animated Book positioned near headings - only on desktop */}
        <div className="book-container">
          <AnimatedBook isVisible={sectionInView} />
        </div>
      </motion.div>

      <div className="container education__container">
        <motion.div
          className="education__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            whileHover={{ scale: 1.05, color: "#4db5ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SchoolIcon /> Education
          </motion.h3>
          <div className="education__list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(77, 181, 255, 0.2)",
                  background: "rgba(77, 181, 255, 0.05)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.1,
                }}
              >
                <div className="education__header">
                  <h4>{edu.degree}</h4>
                  <motion.span
                    className={`status ${edu.status.toLowerCase()}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {edu.status}
                  </motion.span>
                </div>
                <h5>{edu.institution}</h5>
                <span className="education__period">{edu.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="projects__content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            whileHover={{ scale: 1.05, color: "#4db5ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <EmojiEventsIcon /> Academic Projects
          </motion.h3>
          <div className="projects__list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(77, 181, 255, 0.2)",
                  background: "rgba(77, 181, 255, 0.05)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.1,
                }}
              >
                <div className="project__header">
                  <h4>{project.title}</h4>
                  <motion.span
                    className="project__type"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.type}
                  </motion.span>
                </div>
                <p>{project.description}</p>
                <div className="project__technologies">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech__badge"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#4db5ff",
                        color: "#1f1f38",
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
