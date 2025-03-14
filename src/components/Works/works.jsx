import React from "react";
import "./works.css"
// import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"
import Portfolio4 from "../../assets/portfolio-4.png"
import Portfolio5 from "../../assets/portfolio-5.png"
import Portfolio6 from "../../assets/portfolio-6.png"
import housing5 from "../../assets/housing-5.png"
import E_commerce from "../../assets/E-commerce.jpg"







const Works  = () => {
    return(
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">He the yes not at thy take scarce, suffice the fall few in blazon befell known, what fellow fondly any had not misery. Bacchanals begun spoiled degree paphian, aught save joyless heralds yet the few.</span>
            <div className="worksImgs">
                <img src={housing5} alt="" className="worksImg" />
                <img src={E_commerce} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    )}
export default Works