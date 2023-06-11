import React from "react";
import "../components/LandingComponents/css/landing.css"
import Navbar from "../components/LandingComponents/navbar";
import Features from "../components/LandingComponents/Features";
import Land from "../components/LandingComponents/Land";
import About from "../components/LandingComponents/About";
import Testimonial from "../components/LandingComponents/Testimonial";
import Partners from "../components/LandingComponents/Partners";
import Footer from "../components/LandingComponents/footer";
import Faq from "../components/LandingComponents/Faq";

function Landingpage(){
    
    return(
    <div className="body">
        <Navbar />
        <div className="landing-container" id="Land">
            <Land />
        </div>
        <div className="features-container" id="Features">
            <Features />
        </div>
        <div className="About-container" id="About">
            <About />
        </div>
        <div className="testimoninal-container" id="Testimonial">
            <Testimonial />
        </div>
        <div className="faq-contained" id="Faq">
            <Faq />
        </div>
        <div className="partners-container" id="Partners">
            <Partners />
        </div>
        <div className="footer-container" id="Footer">
            <Footer />
        </div>
    </div>
    )

}
export default Landingpage;