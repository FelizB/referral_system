import React from "react";
import "./css/entries.css"

function InputField(props){
    return(
        <div class="input-container">
        <input type="text" id="name" name="name" className="form-control" required />
        <label for="name">{props.label}</label>
        </div>
    )
}

export {InputField};