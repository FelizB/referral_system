import React from "react";
import "./css/landing.css";
import "./css/venobox.css";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
import Rewarded from "../assets/images/completed.svg";
import LandImage from "../assets/images/header-image.svg";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
 const VenoBox = require("venobox");

function Land(){
    new VenoBox({
        selector: ".venobox"
    });
    return(
        <div>
           
        <div className="container">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
        <div className="land-background-image">
            <img src={LandImage}/>
        </div>
        <div className="row align-items-center justify-content-center justify-content-lg-between">

            <div className="col-lg-6 col-md-10">
            <header className="header-hero-content">
                <h1 className="header-title">Welcome to the Referral Board</h1>
                <p className="text">Are you looking to promote employee reward system. Then look no further<br/>
                The referal board is here to assist your company make that decision seamlessly and all you have to do is just reward.<br/>
                Waste no time. <span>Make it work for your staff!!!</span> </p>
                <div>
                <Link to="/sign"><button type="button" class="btn btn-primary btn-lg">Join Us</button></Link>
                <a className="round-circle-video venobox" type="iframe" href="https://www.youtube.com/embed/1SqRm5m_T_Q" >
                <PlayCircleFilledWhiteIcon class="btn btn-info rounded-circle"/>
                </a>
                </div>
            </header>
            </div>

            <div className="col-lg-4 col-md-6">
            <div className="header-image">
                <img src={Rewarded} alt="rewarded person"/>
            </div>
            </div>
        </div>
     </div>
     </div>
    )
}
export default Land;