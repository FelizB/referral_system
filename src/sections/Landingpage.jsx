import React from "react";
import "../components/LandingComponents/css/landing.css"
import Navbar from "../components/LandingComponents/navbar";
import BodySection from "../components/LandingComponents/bodysection";


function Landingpage(){
    return(
        <div className="body">
        <Navbar />
        <BodySection />
        </div>
        
        
        
    )

}
export default Landingpage;