import React from 'react'
import Motto from './Motto';
import "../CSS/login.css";
import {Link} from "react-router-dom";
import image from "../IMAGE/logo_transparent.png"
export default function Forget() {
return (
<div className="container">
<Motto/>
<div className="formbox">
     <div className='logo'>
            <div id='back'><Link to="/signin">-&gt;</Link></div>
            <div id='image'><img src={image} alt=''/></div>
            <div id='tag'><h2>CHHAANO</h2></div>
       </div>
        <div className="inputbox">
        <form method="post">    
        <div className="formdesign" id="email">
        <h3>We need to verify your identity</h3>
        <p>How would you like to get your security code?</p>
        <input type="email" placeholder="Enter Email Address" id="email" name="email"/>
        <div className="btn">
        <input type="submit" name="submit"/>
        </div>
        </div>
  </form>
</div>
</div>
</div>
  )
}
