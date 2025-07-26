import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./services.css";
import CheckIcon from "@mui/icons-material/Check";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SpeedIcon from "@mui/icons-material/Speed";
import ServiceIcons3D from "../threejs/ServiceIcons3D";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
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
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: <CodeIcon />,
      title: "Full Stack Development",
      description:
        "Complete web applications using MERN stack with modern frameworks and best practices.",
      features: [
        "React.js & Next.js Applications",
        "Node.js & Express.js Backend",
        "MongoDB & PostgreSQL Databases",
        "Responsive UI/UX Design",
        "RESTful API Development",
      ],
    },
    {
      id: 2,
      icon: <SmartToyIcon />,
      title: "AI & Document Intelligence",
      description:
        "AI-powered solutions for document processing and intelligent data extraction.",
      features: [
        "Document Intelligence Platforms",
        "Invoice/PO Extraction (95% Accuracy)",
        "Google Gemini AI Integration",
        "Automated Data Processing",
        "Multi-Tenant Workflows",
      ],
    },
    {
      id: 3,
      icon: <SecurityIcon />,
      title: "Security & Access Control",
      description:
        "Enterprise-grade security systems with role-based access control.",
      features: [
        "Role-Based Access Control (RBAC)",
        "User Authentication & Authorization",
        "Data Security Implementation",
        "Granular Permissions Management",
        "Secure Login Systems",
      ],
    },
    {
      id: 4,
      icon: <IntegrationInstructionsIcon />,
      title: "API Integration & Development",
      description:
        "Seamless third-party integrations and custom API development.",
      features: [
        "Facebook Marketing API",
        "QuickBooks Desktop API",
        "Custom REST & SOAP APIs",
        "Data Pipeline Development",
        "Real-time Analytics Integration",
      ],
    },
    {
      id: 5,
      icon: <CloudIcon />,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and deployment automation.",
      features: [
        "AWS Services (S3, EC2)",
        "Docker Containerization",
        "Cloud Architecture Design",
        "Automated Deployment",
        "Performance Monitoring",
      ],
    },
    {
      id: 6,
      icon: <SpeedIcon />,
      title: "Performance Optimization",
      description:
        "Application performance tuning and optimization strategies.",
      features: [
        "Load Time Optimization (35% faster)",
        "Database Query Optimization",
        "Code Performance Tuning",
        "Caching Strategies",
        "User Experience Enhancement",
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <motion.div
        className="services__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
      >
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </motion.div>

      <div className="container services__container">
        {services.map(({ id, icon, title, description, features }, index) => (
          <motion.article
            key={id}
            className="service"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div className="service__head">
              <motion.div
                className="service__icon"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.div>
              <motion.h3 whileHover={{ scale: 1.05 }}>{title}</motion.h3>
              <p className="service__description">{description}</p>
            </div>

            <ul className="service__list">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      color: "#ffffff",
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckIcon className="service__list-icon" />
                  </motion.div>
                  <p>{feature}</p>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <ServiceIcons3D hoveredIndex={hoveredIndex} isVisible={sectionInView} />
    </section>
  );
};

export default Services;
