import * as React from "react";
import "./css/entries.css";
import {InputField, PasswordField, ConfirmPasswordField, EmailField, CheckboxField} from "./Entry";
import { CustomButton, CustomButtonActive} from "./Buttons";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from "react-router-dom";
import SignLayout from "./SignLayout";
import LowerPlaceholder from "./LowerPlaceholder";

function Login(){
    return(
        <div className="LoginContainer" >
        <SignLayout />
        <div className="grid2">
        <form className="inputForm" name="Form1" method="POST" >
            <div>
            <div>
            <Link to="/" className="Linkdata">
            <Button variant="" className="materialbutton" startIcon={<ArrowBackIosNewIcon className="startIcon"/>}>
             Register
            </Button>
            </Link>
            </div>
            <h5>Create your profile</h5>
            <br></br>
            <InputField label="First Name"/>
            <InputField label="Last Name"/>
            <InputField label="Provide a Username"/>
            <EmailField label="Enter your Email"/>
            <PasswordField label="Create Password" type="password"/>
            <PasswordField label="Confirm Password" type="password"/>
            </div>
            <br></br>
            <div className="check">
                <CheckboxField />
                <h6> I accept the Terms and Privacy Policy</h6>
            </div>
            <div className="customButtondiv">
            <CustomButton  className="button" name="Register" />
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