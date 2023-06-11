import React from "react";
import Background1 from "../assets/images/background1.jpg";
import Background2 from "../assets/images/background2.jpg";
import Background3 from "../assets/images/background3.jpg";
import Background4 from "../assets/images/background4.jpg";

function About(){
    return(
        <div className="container">
            <div className="about-title">
                <h1 ><strong>What is Referal Board <span>all about?</span></strong></h1>
                <p >Our services are meant to make difference in organizations by <br />
                <strong>Transforming relationships and making the work environment feel more rewarding </strong></p>
            </div>
            <br />
           <div class="media">
                <img class="align-self-center mr-3 media-image" src={Background1} alt="Generic placeholder image"/>
                <div class="media-body">
                    <h3 class="mt-0">Our History</h3>
                    <p>On 31st December, 2014, Equity Building Society, as it had previously been known as, became Equity Group Holdings Limited, a non-operating holding company, after undergoing a process of restructuring, so as to further meet its objectives. 
                    In 1984, Equity Building Society -now the bank arm of the group- was founded, 
                    and has recorded various key milestones through the years</p>
                    <p class="mb-0">Since then we have partnered with several organizations to archive the dream</p>
                </div>
            </div>
                <br />
            <div class="media">
                <div class="media-body">
                    <h3 class="mt-0">Our Purpose</h3>
                    <p>Transforming work spaces and making improving employees morales</p>
                    <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
                <img class="align-self-center mr-3 media-image" src={Background2} alt="Generic placeholder image"/>
            </div>
            <br />
            <div class="media">
                <img class="align-self-center mr-3 media-image" src={Background3} alt="Generic placeholder image"/>
                <div class="media-body">
                    <h3 class="mt-0">Mission Statement</h3>
                    <p>We offer integrated financial services that socially and economically empower consumers, businesses and communities.</p>
                    <p class="mb-0"><strong>Tagline:</strong>
                        Your Listening, Caring Partner.</p>
                </div>
            </div>
            <br />
            <div class="media">
                <div class="media-body">
                    <h3 class="mt-0">Our Core Values</h3>
                    <p>Our values are intrinsically weaved into our business, flowing through every aspect of our day to day and embracing it as our culture. 
                    They are reflections of what we believe in and as guiding principles provide a standard through which we measure ourselves.</p>
                    
                </div>
                <img class="align-self-center mr-3 media-image" src={Background4} alt="Generic placeholder image"/>
            </div>

           
          
        </div>
    )
}
export default About;