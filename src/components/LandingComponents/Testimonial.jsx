import React from "react";
import Rewarded from "../assets/images/completed.svg";
import QuoteLeft from "../assets/images/quote-left.svg";
import QuoteRight from "../assets/images/quote-right.svg";
import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';
import "./css/testimonial.css";


function Testimonial(){
    // eslint-disable-next-line
    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        loop: true,
      });
   
    return(
      <div>
        <div className="swiper-title">
        <h1>What Our Clients Say</h1>
        </div>
        <div className="swiper">
            <div className="swiper-wrapper">

            <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>

  <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>

            <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>
            <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>
            <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>  <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>  <div className="swiper-slide">
                <div className="testimonialBox">
                  <img src={QuoteLeft} className="quote" alt="quote tags"/>
                <div className="content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <img src={QuoteRight} className="quote2" alt="quote tags"/>
                <div className="details">
                      <div className="imgBx">
                        <img src={Rewarded} alt="Get rewarded" />
                      </div>
                      <h3>
                        Felix Bosire <br/><span>Creative Designer</span>
                      </h3>
                </div>
                
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Testimonial;