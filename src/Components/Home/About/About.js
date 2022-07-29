import React from "react";
import "./about.css";
import ME from "../../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>1+ Year Working Experience</small>
            </article>
            <article className="about_card">
              <ImUsers />
              <h5>Clients</h5>
              <small>10++</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab
            corrupti at et sunt cupiditate, nam porro reprehenderit veniam nemo
            minima, aliquid possimus repudiandae! Odio repellendus soluta
            officia officiis veniam!
          </p>
          <a href="" className="btn btn-primary">
            Let's Talks
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
