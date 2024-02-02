import React from 'react'
import "../CSS/final.css";
import bannerimage from "../IMAGE/banner.png"
export default function Home() {
return (
<>
<div className="disp">
    <img src={bannerimage} alt=""/>
</div>
<form action="Search.php" method='post'>
    <div class="search">
        <p>
        FIND THE ROOM 
        </p>
        <p>TYPE  <select name="type" id="type">
            <option value="SELECT">SELECT</option>
            <option value="SINGLE">Single</option>
            <option value="SHARED">Shared</option>
            <option value="TRIPLE">Triple</option>
            <option value="FAMILY">Family</option>
            <option value="FLAT">Flat</option>
        </select> 
        </p>
        <p>PRICE  <select name="price" id="price">
            <option value="Price">Range</option>
            <option value="Below 1000">Below RS1000</option>
            <option value="1000">RS 1000</option>
            <option value="2000">RS 2000</option>
            <option value="3000">RS 3000</option>
            <option value="4000">RS 4000</option>
            <option value="5000">RS 5000</option>
            <option value="6000">RS 6000</option>
            <option value="7000">RS 7000</option>
            <option value="8000">RS 8000</option>
            <option value="9000">RS 9000</option>
            <option value="10000">RS 10000</option>
            <option value="Above 10000">Above RS10000</option>
        </select>
        </p>
        <p>LOCATION
            <input type='text' name='location'/>
        </p>
    <p>
        <input type="submit" value="Explore Rooms" name="search"/>
    </p>
    </div>
</form>
</>
)
}
