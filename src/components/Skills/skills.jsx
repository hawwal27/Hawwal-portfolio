import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <h2 className="skillTitle">What I Do</h2>
      <p className="skillDesc">
        Passionate and results-driven, I bring creativity, innovation, and technical expertise to every project.
        With a strong foundation in web development, design, and problem-solving, I thrive in dynamic environments,
        embracing growth and learning. Let's build something amazing together!
      </p>

      <div className="skillBars">
        <a href="https://your-uiux-project-link.com" target="_blank" rel="noopener noreferrer" className="skillBar">
          <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>UI/UX Design</h3>
            <p>Designing user interfaces with seamless and intuitive experiences.</p>
          </div>
        </a>

        <a href="https://your-website-project-link.com" target="_blank" rel="noopener noreferrer" className="skillBar">
          <img src={WebDesign} alt="Website Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>Website Design</h3>
            <p>Creating responsive and engaging websites tailored to user needs.</p>
          </div>
        </a>

        <a href="https://your-app-project-link.com" target="_blank" rel="noopener noreferrer" className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3>App Design</h3>
            <p>Designing mobile and desktop apps with user-centered principles.</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Skills;
