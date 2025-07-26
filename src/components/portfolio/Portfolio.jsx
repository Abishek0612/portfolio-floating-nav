import React from "react";
import { motion } from "framer-motion";
import "./portfolio.css";
import chat from "../../assets/chat-app.jpg";
import shoppingCart from "../../assets/shoppingCart.png";
import blog from "../../assets/blog.png";
import lms from "../../assets/lms.png";
import imdb from "../../assets/imdb.png";

const Portfolio = () => {
  const data = [
    // {
    //   id: 1,
    //   image: shoppingCart,
    //   title: "AdStatistic Project (Professional)",
    //   desc: "Engineered Role-Based Access Control System with Facebook Marketing API integration, boosting data security by 98% and improving campaign detection by 70%.",
    //   technologies: ["React", "Node.js", "MongoDB", "Facebook API"],
    //   github: "https://github.com/Abishek0612/e-commerce-client.git",
    //   demo: "https://shopify-dresses.netlify.app/",
    //   category: "Professional",
    // },
    // {
    //   id: 2,
    //   image: blog,
    //   title: "Multifold.ai Document Intelligence",
    //   desc: "AI-Powered Document Intelligence Platform using Google Gemini API for Invoice/PO extraction with 95% accuracy and AWS S3 integration.",
    //   technologies: ["React", "Node.js", "Google Gemini AI", "AWS S3"],
    //   github: "https://github.com/Abishek0612/blogify-client.git",
    //   demo: "https://blog-i.netlify.app/",
    //   category: "Professional",
    // },
    // {
    //   id: 3,
    //   image: lms,
    //   title: "Simpli Capital Enhancement",
    //   desc: "Full-Stack enhancements with QuickBooks API integration, improving load times by 35% and user retention by 25%.",
    //   technologies: ["React", "Node.js", "QuickBooks API", "MongoDB"],
    //   github:
    //     "https://github.com/Abishek0612/Learning-module-system-client.git",
    //   demo: "https://learning-module.netlify.app/",
    //   category: "Professional",
    // },
    {
      id: 4,
      image: shoppingCart,
      title: "E-Commerce Application",
      desc: "A dynamic online shopping platform offering a wide range of products with user-friendly shopping features.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Abishek0612/e-commerce-client.git",
      demo: "https://shopify-dresses.netlify.app/",
      category: "Personal",
    },
    {
      id: 5,
      image: blog,
      title: "Blog Application",
      desc: "An interactive web application for creating, sharing, and discovering insightful and engaging blog posts.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/Abishek0612/blogify-client.git",
      demo: "https://blog-i.netlify.app/",
      category: "Personal",
    },
    {
      id: 6,
      image: lms,
      title: "Learning Module System",
      desc: "An educational platform providing structured learning modules and resources for various subjects or skills.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github:
        "https://github.com/Abishek0612/Learning-module-system-client.git",
      demo: "https://learning-module.netlify.app/",
      category: "Personal",
    },
    {
      id: 7,
      image: imdb,
      title: "IMDB Application",
      desc: "A movie rating and review application offering detailed insights into films, including cast, ratings, and user reviews.",
      technologies: ["React", "JavaScript", "API Integration"],
      github: "https://github.com/Abishek0612/IMDB-Movie-Rating-App.git",
      demo: "https://imdb-app-cl.netlify.app/",
      category: "Personal",
    },
    {
      id: 8,
      image: chat,
      title: "Chat Application",
      desc: "A real-time messaging app enabling users to connect, communicate, and share media seamlessly.",
      technologies: ["React", "Firebase", "Socket.io"],
      github: "https://github.com/Abishek0612/chat-web-app/tree/master",
      demo: "https://chatting-web-app-d0d4f.firebaseapp.com/signin",
      category: "Personal",
    },
  ];

  const [filter, setFilter] = React.useState("All");
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    if (filter === "All") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === filter));
    }
  }, [filter]);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* Filter Buttons */}
      <motion.div
        className="portfolio__filters"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {["All"].map((category) => (
          <motion.button
            key={category}
            className={`filter__btn ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="container portfolio__container">
        {filteredData.map(
          ({ id, image, title, desc, technologies, github, demo }, index) => {
            return (
              <motion.article
                key={id}
                className="portfolio__item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <div className="portfolio__overlay">
                    <div className="portfolio__technologies">
                      {technologies.map((tech, i) => (
                        <span key={i} className="tech__tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-desc">
                  <p>{desc}</p>
                </div>
                <div className="portfolio__item-cta">
                  <motion.a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Github
                  </motion.a>
                  <motion.a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </motion.article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
