import React, { useState } from "react";
import "./navbar.css" 
import logo from "../../assets/logo.png"
import { Link }  from "react-scroll";
import Contacting from "../../assets/contact.png"
import menu from "../../assets/menu.png"
const Navbar =() => {
    const[showMenu, setShowMenu] = useState(false);    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
               <Link className="desktopMenuListItem" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} >Home</Link> 
               <Link className="desktopMenuListItem" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>About</Link>            
               <Link className="desktopMenuListItem" activeClass="active" to="works"  spy={true} smooth={true} offset={-50} duration={500}>Portfolio</Link>
               <Link className="desktopMenuListItem" activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500}>Clients</Link>
               </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: "smooth"});
            }}>
                <img src={Contacting} alt="" className="desktopMenuImg" />Contact Me</button>
                <img src={menu} alt="logo" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{ display: showMenu? "flex" : "none"}}>

               <Link className="listItem" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>About</Link>            
               <Link className="listItem" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Home</Link> 
               <Link className="listItem" activeClass="active" to="works"  spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Portfolio</Link>
               <Link className="listItem" activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Clients</Link>
               <Link className="listItem" activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
               </div>   
                </nav>
    )
}

export default Navbar;