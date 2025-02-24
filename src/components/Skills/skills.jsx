import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"


const  skills = () => {
    return(
        <section id="skills">
           <span className="skillTitle">What i do</span>
           <span className="skillDesc">Mirth later a awake his his minstrels were when, but tales loved loved for his was disappointed childe most. Would ah  goodly shun night waste pillared revellers, ungodly revellers his his native mirth satiety.</span>
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