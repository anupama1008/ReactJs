import React from 'react'
import "../CSS/nav.css";
import myimage from "../IMAGE/logo.png";
export default function Navbar() {
  return (
    <>
    <div className="top">
      <p className='imgg'>
        <img src={myimage} alt="" />
      </p>
        <nav>
        <ul>
        <li><a href="Home.php">Home</a></li>
        <li><a href="Dashboard.php">Rooms</a></li>
        <li><a href="Home.php#Contacts">Contact</a></li>
        <li><a href="Home.php">Menu</a></li>
       
      </ul>
        </nav>
        <p >
        <a href="signup.php"><button className="abtn" name='Login'>+ ADD</button>  </a>
          <a href="LoginUser.php"><button className="abtn" name='Login'>LOGIN</button>  </a>
        </p>
    </div>
</>
  )
}
