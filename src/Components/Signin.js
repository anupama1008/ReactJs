import React from 'react';
import {Link} from "react-router-dom";
import "../CSS/login.css";
import image from "../IMAGE/logo_transparent.png";
import Motto from './Motto';
export default function Signin() {
  return (
    <div className="container">
        <Motto/>
        <div className="formbox">
            <div className='logo'>
                <div id='image'><img src={image} alt=""/></div>
                <div id='tag'><h2>CHHAANO</h2></div>
            </div>
            <h3>Log In</h3>
            <div className="inputbox">
                <form name="myform" method="post">        
                        <div className="formdesign" id="email">
                        <input type="email" name="email" placeholder="Enter Email Address"/>
                        <p className="formerror error"></p>
                    </div>
                    <div className="formdesign" id="pass">
                        <input type="password" name="psd" placeholder="Enter Password"/>
                        <p className="formerror error"></p>
                    </div>
                    <div className="frg-btnn">
                        <Link to="/forget">Forgot Password?</Link>
                    </div>
                    <div className="btn">
                        <input type="submit" value="Log In" name="Login"/>
                    </div>
                    <div className="new-btnn">
                        <Link to="/signup">Don't Have an Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}