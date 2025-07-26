import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Experience = () => {
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
    <section id="experience">
      <h5>My Journey</h5>
      <h2>Work Experience & Skills</h2>

      <div className="container experience__container">
        {/* Work Experience */}
        <motion.div
          className="work__experience"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>
            <WorkIcon /> Professional Experience
          </h3>
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="job__card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="job__header">
                <h4>{job.title}</h4>
                <h5>{job.company}</h5>
                <span className="job__period">
                  <CalendarTodayIcon /> {job.period}
                </span>
              </div>
              <ul className="job__achievements">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>
                    <VerifiedIcon className="achievement__icon" />
                    <span>{achievement}</span>
                  </li>
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
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {skills.frontend.map((skill, index) => (
                <motion.article
                  key={index}
                  className="experience__details"
                  whileHover={{ scale: 1.05 }}
                >
                  <VerifiedIcon className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              {skills.backend.map((skill, index) => (
                <motion.article
                  key={index}
                  className="experience__details"
                  whileHover={{ scale: 1.05 }}
                >
                  <VerifiedIcon className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
