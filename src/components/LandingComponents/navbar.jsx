import React from "react";
import "./css/landing.css"

function Navbar(){
    return(
        <nav className="navbar navbar-light bg-light">
            <div>
                <a class="navbar-brand">
                 Referal Board
                </a>
            </div>
            <div className="nav-items-container">
                <ul>
                    <li className="nav-items">Home</li>
                    <li className="nav-items">Features</li>
                    <li className="nav-items">About Us</li>
                    <button className="nav-button">Login</button>
                    <button className="nav-button">Register</button>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;