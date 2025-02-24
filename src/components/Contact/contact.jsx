import React from "react";
import "./contact.css"
import Walmart from "../../assets/walmart.png"
import Adobe from "../../assets/adobe.png"
import Microsoft from "../../assets/microsoft.png"
import Facebook from "../../assets/facebook.png"
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import YouTubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"

const Contact = () => {
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Client</h1>
                <p className="clientDesc">
                    Takimata gubergren sit labore kasd rebum ipsum, diam et diam elitr at justo stet dolor at gubergren, voluptua diam et.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="" className="clientImg" />
                    <img src={Adobe} alt="" className="clientImg" />
                    <img src={Microsoft} alt="" className="clientImg" />
                    <img src={Facebook} alt="" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">liquyam stet erat consetetur clita duo ipsum sed, et diam.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                    <button className="submitBtn" type="submit" value="send">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="" className="link" />
                        <img src={TwitterIcon} alt="" className="link" />
                        <img src={YouTubeIcon} alt="" className="link" />
                        <img src={InstagramIcon} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact