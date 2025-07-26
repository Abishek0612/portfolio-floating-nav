import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FloatingCodeElements from "../threejs/FloatingCodeElements";

const Experience = () => {
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
          } else {
            setSectionInView(false);
          }
        });
      },
      {
        threshold: 0.2, // More restrictive threshold
        rootMargin: "0px 0px -100px 0px", // Only activate when well within section
      }
    );

    const section = document.getElementById("experience");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const workExperience = [
    {
      title: "Software Engineer",
      company: "NewGen Technomate LLP",
      period: "07/2024 - Present",
      achievements: [
        "Engineered Role-Based Access Control System, Boosting Data Security by 98%",
        "Designed Performance Evaluation Algorithms improving Campaign Detection by 70%",
        "Built AI-Powered Document Intelligence Platform with 95% Accuracy",
        "Implemented Multi-Tenant Document Workflow processing 1000+ Documents Daily",
      ],
    },
    {
      title: "Software Developer",
      company: "E-Mech Solutions Pvt. Ltd.",
      period: "12/2022 - 06/2024",
      achievements: [
        "Spearheaded Full-Stack Enhancements improving Load Times by 35%",
        "Architected Interactive Features increasing User Engagement by 20%",
        "Integrated QuickBooks Desktop API streamlining Processing Time by 30%",
        "Built Advanced Search/Filter APIs enhancing Operational Efficiency by 15%",
      ],
    },
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "TailwindCSS", level: "Advanced" },
    ],
    backend: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "MongoDB", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
    ],
  };

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h5>My Journey</h5>
        <h2>Work Experience & Skills</h2>
      </motion.div>

      <div className="container experience__container">
        {/* Work Experience */}
        <motion.div
          className="work__experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            whileHover={{ scale: 1.05, color: "#4db5ff" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <WorkIcon /> Professional Experience
          </motion.h3>
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="job__card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(77, 181, 255, 0.2)",
                background: "rgba(77, 181, 255, 0.05)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: index * 0.2,
              }}
            >
              <div className="job__header">
                <motion.h4
                  whileHover={{
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(77, 181, 255, 0.5)",
                  }}
                >
                  {job.title}
                </motion.h4>
                <h5>{job.company}</h5>
                <span className="job__period">
                  <CalendarTodayIcon /> {job.period}
                </span>
              </div>
              <ul className="job__achievements">
                {job.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <VerifiedIcon className="achievement__icon" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="technical__skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="experience__frontend"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {skills.frontend.map((skill, index) => (
                <motion.article
                  key={index}
                  className="experience__details"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(77, 181, 255, 0.1)",
                    borderRadius: "0.5rem",
                  }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <VerifiedIcon className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="experience__backend"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Backend Development</h3>
            <div className="experience__content">
              {skills.backend.map((skill, index) => (
                <motion.article
                  key={index}
                  className="experience__details"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(77, 181, 255, 0.1)",
                    borderRadius: "0.5rem",
                  }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  <VerifiedIcon className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <FloatingCodeElements isVisible={sectionInView} />
    </section>
  );
};

export default Experience;
