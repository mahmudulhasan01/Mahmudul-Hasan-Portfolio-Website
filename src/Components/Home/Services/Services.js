import React from "react";
// import { pic } from "../../../assets/portfolio1.jpg";
import pic from "../../../assets/portfolio5.png";

const Services = () => {
  return (
    <section id="services">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={pic} alt="" />
          </div>

          <h3>This is a portfolio item title</h3>

          <a href="https://github.com" className="btn" target="_blank">
            {" "}
            Github{" "}
          </a>
          <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Services;
