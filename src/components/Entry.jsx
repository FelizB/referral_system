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
function EmailField(props){
    return(
        <div class="input-container">
        <input type="email" id="email" name="email" className="form-control"
        pattern=".+@globex\.com" size="30" required/>
        <label for="email">{props.label}</label>
        </div>
    )
}
function PasswordField(props){
    return(
        <div class="input-container">
        <input type="password" id="name" name="name" className="form-control" minLength="8" required />
        <label for="name">{props.label}</label>
        </div>
    )
}
function ConfirmPasswordField(props){
    return(
        <div class="input-container">
        <input type="password" id="name" name="name" className="form-control" minLength="8" required />
        <label for="name">{props.label}</label>
        </div>
    )
}

function CheckboxField(props){
    return(
    <div>
      <input type="checkbox" id="scales" name="scales"/>
      <label for="scales"></label>
    </div>
    )
}

export {InputField, PasswordField, ConfirmPasswordField,EmailField, CheckboxField};