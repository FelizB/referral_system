import React from "react";

function Button(props){
    return(
        <button type="submit" class="btn btn-primary" id={props.className}>{props.name}</button>
    )
}

function ButtonActive(props){
    return(
        <button type="submit" class="btn btn-primary" id={props.className}>{props.name}</button>
    )
}

export {Button, ButtonActive};