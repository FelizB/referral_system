import React from "react";
import "./css/landing.css";
import { Link } from "react-router-dom";
import Analysis from "../assets/images/analysis.svg";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer(){
        const year= new Date().getFullYear();
    return(
            <div>
            <div className="container">
            <div className="grid-title">
                    <h1>The Benefits</h1>
                </div>
                <div className="footer-start">
                    <div>
                        <div> stars goes here</div>
                        <div>
                            <h3>An <strong>award-winning</strong> platform. <strong>Loved</strong> by Customers</h3>
                            <p>Based on 10,000+ customer reviews</p>
                        </div>

                    </div>
                    <div>
                        <div className="item-container">
                            <div className="row">
                                <div className="col-sm grid-item">
                                    <div class="card">
                                        <img class="card-img-top" src="..." alt="test"/>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm grid-item">
                                    <div class="card">
                                        <img class="card-img-top" src="..." alt="test"/>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm grid-item">
                                    <div class="card">
                                        <img class="card-img-top" src="..." alt="test"/>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div>
                            <h3>Get the best employee for the period <strong>with Referral Board</strong></h3>
                            <h5>Easy and Simple to use "*" Efficient and trasparent processes  </h5>
                        </div>
                        <Link to="/sign"><button type="button" class="btn btn-primary btn-lg">Get started</button></Link>

                    </div>

                </div>
        </div>
        <div className="container container-footer">
            <hr />
            <div className="footer-middle">
                <div className="row">
                <div className="col-md-4">
                    <div className="information">
                    <h2><span>Rf</span> board</h2>
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
                            <li><FacebookIcon className="icons"/></li>
                            <li><TwitterIcon className="icons"/></li>
                            <li><InstagramIcon className="icons"/></li>
                            <li><LinkedInIcon className="icons"/></li>
                            <li><YouTubeIcon className="icons"/></li>
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
                <div className="col-md-3">
                    <h4>Contact Us</h4>
                    <ul>
                        <li className="li" ><LocalPhoneIcon className="icons"/> +25470000000</li>
                        <li className="li"><EmailIcon className="icons"/>test@gmail.com</li>
                        <li className="li"><LanguageIcon className="icons"/>www.referralboard.com</li>
                        <li className="li"><PlaceIcon className="icons"/>123 street Nairobi, Kenya</li>
                        <li className="li"><LocationCityIcon className="icons"/>Center Towers</li>
                    </ul>

                </div>
                </div>
            </div>
            <hr />
            <div className="footer-end">
              <h6>Copyright @ {year} Referral Board</h6>

            </div>
        </div>
        </div>
    )
}
export default Footer;