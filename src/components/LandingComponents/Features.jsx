import React from "react";
import "./css/landing.css";
import Analysis from "../assets/images/analysis.svg";

function Features(){
    return(
         <div className="container features-Section">
                <div className="grid-title">
                    <h1>The Benefits</h1>
                    <div>
                    <h3>An <strong>award-winning</strong> platform. <strong>Loved</strong> by Customers</h3>
                    <p>Based on 10,000+ customer reviews</p>
                </div>
                </div>
                <div className="item-container">
                  <div className="row">
                        <div className="col-sm grid-item">
                            <div className="card">
                                <img calssName="card-img" src={Analysis} alt="feature1"/>
                                <div >
                                    <h1 >Ease To Use</h1>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm grid-item">
                            <div className="card">
                                <img calssName="card-img" src={Analysis} alt="feature1"/>
                                <div >
                                    <h1 >Ease To Use</h1>
                                    <p >Reward your staff with the best feature in the market
                                    <strong> Make them feel satisfied with their work</strong></p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm grid-item">
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