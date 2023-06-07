import React from "react";
import "./css/landing.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-light bg-light">
            <div>
                <a class="navbar-brand">
                 <span>Rf</span> Board
                </a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li className="nav-items">Features</li>
                    <li className="nav-items">About Us</li>
                    <li className="nav-items">Contacts</li>
                    <li className="nav-items">Testimonials</li>
                    <li className="nav-items">FAQ</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;