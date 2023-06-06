import React from "react";
import "../AuthSign/css/entries.css";

function InputField(props){
    return(
        <div class="input-container">
        <input type="text" id="name" name="name" className="form-control" maxlength="" required />
        <label for="name">{props.label}</label>
        </div>
    )
}
function EmailField(props){
    return(
        <div class="input-container">
        <input type="email" id="email" name="email" className="form-control"  maxlength="" required/>
        <label for="email">{props.label}</label>
        </div>
    )
}
function PasswordField(props){
    return(
        <div class="input-container">
        <input type="password" id="password" name="password" className="form-control" minLength="" required />
        <label for="password">{props.label}</label>
        </div>
    )
}
function ConfirmPasswordField(props){
    return(
        <div class="input-container">
        <input type="password" id="confirmpassword" name="confirmpassword" className="form-control" minLength="30" required />
        <label for="confirmpassword">{props.label}</label>
        </div>
    )
}

function CheckboxField(props){
    return(
    <div>
      <input type="checkbox" id="checkbox" name="checkbox"/>
      <label for="checkbox"></label>
    </div>
    )
}

export {InputField, PasswordField, ConfirmPasswordField, EmailField, CheckboxField};