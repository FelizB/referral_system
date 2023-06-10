import React from "react";
import TeamUp from "../assets/images/team_up.svg";
import "./css/landing.css";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function Faq(){
    return(
    <div className="container">
        <div className="grid-title">
            <h1>The Benefits</h1>
        </div>
       <div className="">
        <div className="row justify-content-lg-between ">
            <div className="col-lg-4 col-md-6 faq-image-container align-items-center justify-content-center ">
                <img src={TeamUp} alt="description"/>
            </div>
            <div className="col-lg-6 col-md-10 faq-container">
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" 
                            aria-controls="collapseOne"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" 
                            aria-controls="collapseTwo"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" 
                            aria-controls="collapseThree"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" 
                            aria-controls="collapseFour"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFive" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" 
                            aria-controls="collapseFive"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingSix" >
                            <Button className="btn faq-button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" 
                            aria-controls="collapseSix"  endIcon={<ArrowBackIosNewIcon className="enIcon"/>}>
                                Collapsible Group Item #1
                            </Button>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, 
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}
export default Faq;