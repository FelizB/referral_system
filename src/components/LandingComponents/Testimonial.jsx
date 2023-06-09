import React from "react";
import Rewarded from "../assets/images/completed.svg";
import QuoteLeft from "../assets/icons/quote-left.svg";
import QuoteRight from "../assets/icons/quote-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./css/testimonial.css";
import { EffectCoverflow, Pagination } from "swiper";


function Testimonial(){
   
    return(
        <div className="container">
        <div className="grid-title">
                    <h1>The Benefits</h1>
        </div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate:0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        loop= {false}
        pagination={true}
        navigation={false}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
        <div >
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
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div >
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
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div >
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
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div >
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
        </SwiperSlide>
       
      </Swiper>
      </div>
   
    )
}
export default Testimonial;