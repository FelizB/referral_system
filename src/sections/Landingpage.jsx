import React from "react";
import "../components/LandingComponents/css/landing.css"
import Navbar from "../components/LandingComponents/navbar";
import Features from "../components/LandingComponents/Features";
import Land from "../components/LandingComponents/Land";
import Testimonial from "../components/LandingComponents/Testimonial";
import Partners from "../components/LandingComponents/Partners";
import Footer from "../components/LandingComponents/footer";
import Faq from "../components/LandingComponents/Faq";

function Landingpage(){
    return(
    <div className="body">
        <Navbar />
        <div className="landing-container">
            <Land />
        </div>
        <div className="features-container">
            <Features />
        </div>
        <div className="testimoninal-container">
            <Testimonial />
        </div>
        <div className="faq-contained">
            <Faq />
        </div>
        <div className="partners-container">
            <Partners />
        </div>
        <div className="footer-container">
            <Footer />
        </div>
    </div>
    )

}
export default Landingpage;