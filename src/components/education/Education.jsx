import React from "react";
import { motion } from "framer-motion";
import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Education = () => {
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
    <section id="education">
      <h5>My Academic Journey</h5>
      <h2>Education & Projects</h2>

      <div className="container education__container">
        <motion.div
          className="education__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>
            <SchoolIcon /> Education
          </h3>
          <div className="education__list">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education__item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="education__header">
                  <h4>{edu.degree}</h4>
                  <span className={`status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
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
          <h3>
            <EmojiEventsIcon /> Academic Projects
          </h3>
          <div className="projects__list">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project__item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project__header">
                  <h4>{project.title}</h4>
                  <span className="project__type">{project.type}</span>
                </div>
                <p>{project.description}</p>
                <div className="project__technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech__badge">
                      {tech}
                    </span>
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
