import React from 'react'
import Motto from '../Components/Motto';
import image from "../IMAGE/logo_transparent.png"
import {Link} from "react-router-dom";
export default function Signup() {
  return (
    <div>
      <div className="container">
       <Motto/>
        <div  className="formbox">
            <div  className='logo'>
                <div id='image'><img src={image} alt=""/></div>
                <div id='tag'><h2>CHHAANO</h2></div>
            </div>
            <h3>Sign Up</h3>
            <div  className="inputbox">
                <form name="myform" onsubmit="return validateform();" method="post">
                    <div  className="formdesign" id="name">
                        <input type="text" name="name" placeholder="Full Name"/>
                        <p  className="formerror error"></p>
                    </div>
                    <div  className="formdesign" id="email">
                        <input type="text" name="email" placeholder="Email Address"/>
                        <p  className="formerror error"></p>
                    </div>
                    <div  className="formdesign" id="phone">
                        <input type="text" name="phone" placeholder="Phone Number"/>
                        <p  className="formerror error"></p>
                    </div>
                    <div  className="formdesign" id="pass">
                        <input type="password" name="psd" placeholder="Password"/>
                        <p  className="formerror error"></p>
                    </div>
                    <div  className="formdesign" id="cpass">
                        <input type="password" name="cpsd" placeholder="Confirm Password"/>
                        <p  className="formerror error"></p>
                    </div>
                    <div  className="btn">
                        <input type="submit"  className="btn" value="Submit" name="Register"/>
                    </div>
                    <div  className="new-btnn">
                        <Link to="/signin">Already have an Account?</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}