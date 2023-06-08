import React from "react";
import "./css/landing.css";
import Analysis from "../assets/images/analysis.svg";

function Features(){
    return(
         <div className="container features-Section">
                <div className="grid-title">
                    <h1>The Benefits</h1>
                </div>
                <div className="item-container">
                  <div className="grid">
                        <div className="grid-item">
                            <div className="card">
                                <img calssName="card-img" src={Analysis} alt="feature1"/>
                                <div >
                                    <h1 >Ease To Use</h1>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="card">
                                <img calssName="card-img" src={Analysis} alt="feature1"/>
                                <div >
                                    <h1 >Ease To Use</h1>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="card">
                                <img calssName="card-img" src={Analysis} alt="feature1"/>
                                <div >
                                    <h1 >Ease To Use</h1>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>
                  </div>
                    
                </div>
            </div>
    )
}
export default Features;