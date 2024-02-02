import React from 'react'
import "../CSS/nav.css";
import myimage from "../IMAGE/logo.png";
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="top">
      <p className='imgg'>
        <img src={myimage} alt="" />
      </p>
        <nav>
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/menu">Menu</Link></li>
       
      </ul>
        </nav>
        <p >
        <Link to="/addroom"><button className="abtn" name='Login'>+ ADD</button>  </Link>
        <Link to="/signin"><button className="abtn" name='Login'>LOGIN</button>  </Link>
        </p>
    </div>
</>
  )
}
