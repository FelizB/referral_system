import React from "react";
import "./css/entries.css";
import SignLayout from "./SignLayout";
import LowerPlaceholder from "./LowerPlaceholder";
import {InputField, PasswordField} from "./Entry";
import {CustomButton, CustomButtonActiveNavigate} from "./Buttons";

function Login(props){
    return(
        <div className="LoginContainer" >
        <SignLayout />
        <div className="grid2">
        <form className="inputForm" name="Form1" method="POST" >
            <div>
            <h3>Sign in</h3>
            <p>
                <h6>Sign in to continue. Remember, your password is yours, do not share it with anyone.</h6>
                 <h6>   If this is your first time here, you can register using</h6>
            </p>
            <br></br>
            <br></br>
            <InputField label="Username"/>
            <PasswordField label="Password" type="password"/>
            <p className="password">Forgot your Password?</p>
            </div>
            <br></br>
            <div>
            <CustomButton className="button" name="Sign in" />
            <CustomButtonActiveNavigate  className="buttonActive" name="Register" path="/signup"/>
            </div>
            <br></br>
            <div className="LogFooter">
                <LowerPlaceholder />
            </div>

        </form>
        </div>
        </div>
    )
}
export default Login;