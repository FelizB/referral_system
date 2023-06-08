import React from "react";
import "./css/landing.css";


function Footer(){
        const year= new Date().getFullYear();
    return(
        <div className="container">
            <div className="footer-start">

            </div>
            <hr />
            <div className="footer-middle">
                <div className="row">
                <div className="col-md-4">
                    <div className="information">
                    <h3>Rf board</h3>
                    </div>
                    <div>
                        <p>
                        Information is an abstract concept that refers to that which has the power to inform.
                         At the most fundamental level, 
                        information pertains to the interpretation of that which may be sensed, or their ab…
                        </p>
                    </div>
                    <div className="social">
                        <ul>
                            <li>FB</li>
                            <li>Ln</li>
                            <li>in</li>
                            <li>T</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li className="li">Home</li>
                        <li className="li">Features</li>
                        <li className="li">About</li>
                        <li className="li">Testimonial</li>
                        <li className="li">Faq</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Support</h4>
                    <ul>
                        <li className="li">FAQ</li>
                        <li className="li">Privacy Policy</li>
                        <li className="li">Terms of Use</li>
                        <li className="li">Legal</li>
                        <li className="li">Site Map</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li className="li">+25470000000</li>
                        <li className="li">test@gmail.com</li>
                        <li className="li">www.referralboard.com</li>
                        <li className="li">123 street Nairobi, Kenya</li>
                        <li className="li">Center Towers</li>
                    </ul>

                </div>
                </div>
            </div>
            <hr />
            <div className="footer-end">
              <h6>Copyright @ {year} Referral Board</h6>

            </div>
        </div>
    )
}
export default Footer;