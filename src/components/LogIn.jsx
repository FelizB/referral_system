import React from "react";
import "./css/entries.css"
import {InputField} from "./Entry";
import { Button, ButtonActive} from "./Buttons";

function Login(){
    return(
        <div className="LoginContainer" >
        <div className="grid1">
            <section className="section">
                <h5>Welcome to <br></br>Referral Board</h5>
                <p>Get your Reward!!!</p>
            </section>
            
        </div>
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
            <InputField label="Password" type="password"/>
            <p className="password">Forgot your Password?</p>
            </div>
            <br></br>
            <div>
            <Button className="button" name="Sign in" />
            <Button  className="buttonActive" name="Register" />
            </div>
            <div className="LogFooter">
                <p>This is the lowerpart</p>
            </div>

        </form>
        </div>
        </div>
    )
}
export default Login;