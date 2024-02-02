import React from 'react'
import  "../CSS/login.css";
import roomimage from "../IMAGE/Room.jpg";
export default function Motto() {
  return (
      <div className="motto">
            <img src={roomimage} alt=""/>
            <h3>FEELS LIKE HOME.</h3>
            <p>Chhaano Room Renting System</p>
        </div>
  )
}
