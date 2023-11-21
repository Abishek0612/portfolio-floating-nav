import React from "react";
import "./portfolio.css";
import chat from "../../assets/chat-app.jpg";
import boxoffice from "../../assets/boxoffice.png";
import tictac from "../../assets/tic-tac.png";
import shoppingCart from "../../assets/shoppingCart.png";
import blog from "../../assets/blog.png";
import lms from "../../assets/lms.png";
import imdb from "../../assets/imdb.png";
import foodApp from "../../assets/foodApp.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: shoppingCart,
      title: " E-Commerce Application",
      desc: " A dynamic online shopping platform offering a wide range of products with user-friendly shopping features.",
      github: "https://github.com/Abishek0612/e-commerce-client.git",
      demo: "https://shopify-dresses.netlify.app/",
    },
    {
      id: 2,
      image: blog,
      title: " Blog Application",
      desc:"An interactive web application for creating, sharing, and discovering insightful and engaging blog posts.",
      github: "https://github.com/Abishek0612/blogify-client.git",
      demo: "https://blog-i.netlify.app/",
    },
    {
      id: 3,
      image: lms,
      title: " Learning Module System Application",
      desc:"An educational platform providing structured learning modules and resources for various subjects or skills.",
      github:
        "https://github.com/Abishek0612/Learning-module-system-client.git",
      demo: "https://learning-module.netlify.app/",
    },
    {
      id: 4,
      image: imdb,
      title: " IMDB Application",
      desc:" A movie rating and review application offering detailed insights into films, including cast, ratings, and user reviews.",
      github: "https://github.com/Abishek0612/IMDB-Movie-Rating-App.git",
      demo: "https://imdb-app-cl.netlify.app/",
    },
    {
      id: 5,
      image: chat,
      title: " Chat Application",
      desc:"A real-time messaging app enabling users to connect, communicate, and share media seamlessly.",
      github: "https://github.com/Abishek0612/chat-web-app/tree/master",
      demo: "https://chatting-web-app-d0d4f.firebaseapp.com/signin",
    },
    {
      id: 6,
      image: foodApp,
      title: " Food App",
      desc:"A culinary app featuring diverse recipes, restaurant reviews, and food ordering options for food enthusiasts.",
      github: "https://github.com/Abishek0612/Food-App-Client.git",
      demo: "https://foodiiee-app.netlify.app/",
    },
    {
      id: 7,
      image: boxoffice,
      title: " BOX OFFICE",
      desc:" A comprehensive portal for the latest box office news and movie ratings.",
      github: "https://github.com/Abishek0612/box-office",
      demo: "https://giant-boxoffice.surge.sh/",
    },
    {
      id: 8,
      image: tictac,
      title: " TIC TAC TOE GAME",
      desc:"A digital version of the classic Tic Tac Toe game, offering fun and engaging gameplay for all ages.",
      github: "https://github.com/Abishek0612/tic-tac-toe-game",
      demo: "https://abitictacgame.surge.sh/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-desc">
                <p>{desc}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
