import React from "react";
import "./works.css";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1652926288452-911118b38c7b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // housing UI
    title: "Real Estate Platform",
    link: "https://your-housing-project.com",
  },
  {
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // e-commerce
    title: "E-commerce Website",
    link: "https://your-ecommerce-site.com",
  },
  {
    image: "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // clean UI
    title: "Landing Page Design",
    link: "https://your-landing-page.com",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1728309314480-f211148f45e4?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // portfolio concept
    title: "Personal Portfolio",
    link: "https://your-portfolio.com",
  },
  {
    image: "https://images.unsplash.com/photo-1556894181-cb8e4ccca5d0?q=80&w=889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // dashboard UI
    title: "Dashboard UI",
    link: "https://your-dashboard.com",
  },
  {
    image: "https://images.unsplash.com/photo-1548524238-a971a4a3b523?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // campaign
    title: "Marketing Campaign",
    link: "https://your-marketing.com",
  },
];

const Works = () => {
  return (
    <section id="works" className="worksSection">
      <h2 className="worksTitle">My Portfolio</h2>
      <p className="worksDesc">
        I create digital experiences that are modern, intuitive, and beautifully crafted.
        Each project reflects my commitment to functionality, creativity, and clean design.
        Explore some of my recent work below.
      </p>

      <div className="worksGrid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="workCard"
            key={index}
          >
            <img src={`${project.image}?auto=format&fit=crop&w=800&q=80`} alt={project.title} className="workImg" />
            <div className="workOverlay">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
