import React from "react";
import { Link } from "react-router-dom";

function CustomButton(props){
    return(
        <button type="submit" class="btn btn-primary" id={props.className} >{props.name}</button>
    )
}

function CustomButtonActiveNavigate(props){
    return(
        <Link to={props.path} >
            <button class="btn btn-primary" id={props.className} >{props.name}</button>
        </Link>
        
    )
}

export {CustomButton, CustomButtonActiveNavigate};