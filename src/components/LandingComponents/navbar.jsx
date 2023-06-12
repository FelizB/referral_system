import React from "react";
import "./css/landing.css";
import { Link } from "react-router-dom";

function Navbar(){
    window.onscroll = function (event){
        if(this.scrollY >120)
        {
           let item= document.querySelector("#nav");
           item.setAttribute("class", "navbar navbar-scroll");
        }
        
        else if(this.scrollY <120)
        {
           let item= document.querySelector("#nav");
           item.setAttribute("class", "navbar");
        }
        }

    return(
        <nav id="nav" className="navbar">
            <div className="navbar-logo">
                <a class="navbar-brand">
                 <span>Rf</span> Board
                </a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li className="nav-items"><a href="#Land">Home</a></li>
                    <li className="nav-items"><a href="#Features">Features</a></li>
                    <li className="nav-items"><a href="#About">About Us</a></li>
                    <li className="nav-items"><a href="#Testimonial">Testimonials</a></li>
                    <li className="nav-items"><a href="#Faq">FAQ</a></li>
                    <li className="nav-items"><a href="#Footer">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;