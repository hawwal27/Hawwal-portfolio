import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


const  skills = () => {
    return(
        <section id="skills">
           <span className="skillTitle">What i do</span>
           <span className="skillDesc">Passionate and results-driven, I bring creativity, innovation, and technical expertise to every project. With a strong foundation in web development, design, and problem-solving, I continuously seek new challenges to refine my skills and deliver impactful solutions. I thrive in dynamic environments, embracing growth and learning to stay ahead in an ever-evolving industry. Let's build something amazing together</span>
           <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>this is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>this is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>this is a demo text, you can write your own content here</p>
                </div>
            </div>
            </div>   
        </section>
    )
}
export default skills;