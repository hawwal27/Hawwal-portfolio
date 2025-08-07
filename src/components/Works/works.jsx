import React, { useEffect, useRef, useState } from "react";
import "./works.css";

const projects = [
  {
    image: "https://media.istockphoto.com/id/1192403701/photo/residential-housing-background.jpg?s=1024x1024&w=is&k=20&c=F0b-l2QTN1Gmhwjz5XMGL8zJ-8dtoB4iNB108w6G6Us=",
    title: "Real Estate Platform",
    link: "https://agentweb-1oii.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "E-commerce Website",
    link: "https://e-commerce-qgfm.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Autoray-Web",
    link: "https://auto-ray-pcla.vercel.app/",
  },
  {
    image: "https://media.istockphoto.com/id/1036559046/photo/portfolio-and-wealth-management-with-risk-diversification-concept-small-paper-cartons-boxes.jpg?s=1024x1024&w=is&k=20&c=qYCCpFMU4cVkSoDrdUvLU4olIj-uhH3RXuTJBSEtUio=",
    title: "Personal Portfolio",
    link: "https://your-portfolio.com",
  },
  {
    image: "https://media.istockphoto.com/id/1223969682/vector/online-education-learning-management-system-concept-tiny-characters-at-huge-laptop-lms.jpg?s=1024x1024&w=is&k=20&c=D3LYo6N4s2WV_9ZpRSLcsW89pqJLDResGOnVNWxqQw0=",
    title: "L-M-S",
    link: "https://lms-by-hawwal-irul.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1548524238-a971a4a3b523?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cow-Horn marketing",
    link: "https://cow-horn.vercel.app/",
  },
];

const Works = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef(null);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const slideWidth = slideRef.current.offsetWidth;
    slideRef.current.querySelector(
      ".worksTrack"
    ).style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }, [slideIndex]);

  return (
    <section id="works" className="worksSection">
      <h2 className="worksTitle">My Portfolio</h2>
      <p className="worksDesc">
        I create digital experiences that are modern, intuitive, and beautifully crafted.
        Each project reflects my commitment to functionality, creativity, and clean design.
        Explore some of my recent work below.
      </p>

      <div className="carouselContainer" ref={slideRef}>
        <div className="worksTrack">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="workCard"
              key={index}
            >
              <img
                src={project.image}
                alt={project.title}
                className="workImg"
              />
              <div className="workOverlay">
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
