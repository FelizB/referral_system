import React from "react";
import "./css/landing.css";
import { Link } from "react-router-dom";
import Rewarded from "../assets/images/completed.svg";



function Land(){
    return(
        <div className="container">
        <div className="row align-items-center justify-content-center justify-content-lg-between">

            <div className="col-lg-6 col-md-10">
            <header className="header-hero-content">
                <h1 className="header-title">Welcome to the Referral Board</h1>
                <p className="text">Are you looking to promote employee reward system. Then look no further<br/>
                The referal board is here to assist your company make that decision seamlessly and all you have to do is just reward.<br/>
                Waste no time. <span>Make it work for your staff!!!</span> </p>
                <Link to="/sign"><button type="button" class="btn btn-primary btn-lg">Join Us</button></Link>
            </header>
            </div>

            <div className="col-lg-4 col-md-6">
            <div className="header-image">
                <img src={Rewarded} alt="rewarded person"/>
            </div>
            </div>
        </div>
     </div>
    )
}
export default Land;