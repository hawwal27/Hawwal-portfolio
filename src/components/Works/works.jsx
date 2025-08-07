import React from "react";
import "./works.css";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1564869734424-d074f6e96c83", // housing UI
    title: "Real Estate Platform",
    link: "https://your-housing-project.com",
  },
  {
    image: "", // e-commerce
    title: "E-commerce Website",
    link: "https://your-ecommerce-site.com",
  },
  {
    image: "https://images.unsplash.com/photo-1614850523451-1f94adf6d4a2", // clean UI
    title: "Landing Page Design",
    link: "https://your-landing-page.com",
  },
  {
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed", // portfolio concept
    title: "Personal Portfolio",
    link: "https://your-portfolio.com",
  },
  {
    image: "https://images.unsplash.com/photo-1581092918367-4c20889f1f1a", // dashboard UI
    title: "Dashboard UI",
    link: "https://your-dashboard.com",
  },
  {
    image: "https://images.unsplash.com/photo-1603354350317-6c2d6888fd9b", // campaign
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
