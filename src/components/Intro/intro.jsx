import React from "react"
import "./intro.css"
// import bg from "../../assets/image.png"
import {Link}  from "react-scroll";
import btnimg from "../../assets/hireme.png"
import Portfolio6 from "../../assets/portfolio-6.png"



const Intro = () => {
    return(
        <>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Hawwal</span> <br />Website Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br /> visually and appealing and user friendly Website.</p>
                <Link><button className="btn"><img src={btnimg} alt="" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={Portfolio6} alt="Profile" className="bg" />
        </section>
        </>
    )
}

export default Intro;