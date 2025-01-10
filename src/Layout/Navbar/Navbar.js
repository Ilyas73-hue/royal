import React from 'react';
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import nav_logo from "../../RoyalAssets/royal.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


function Navbar() {


   const data = localStorage.getItem("userId")

  return (
    <div id="navbar">
       <div id="navbar-section-1">
         <div className='container' id="navbar-section-1-div-1">
              <div id="navbar-section-1-div-1-1">
                 <div id="navbar-section-1-div-1-1-1">
                  <FaPhoneAlt id="navbar-section-1-div-1-1-1-phone" />
                 </div>
                 <div id="navbar-section-1-div-1-1-2">
                 <p id="navbar-section-1-div-1-1-2-p-1">+91 0000000000</p>
                 </div>
              </div>
              <div id="navbar-section-1-div-1-2">
                 <div id="navbar-section-1-div-1-2-1">
                 <SiMinutemailer id="navbar-section-1-div-1-2-1-email" />
                 </div>
                 <div id="navbar-section-1-div-1-2-2">
                 <p id="navbar-section-1-div-1-2-2-p-1">email@gmail.com</p>
                 </div>
              </div>
         </div>
       </div>
       <nav class="navbar navbar-expand-lg" id="navbar-2">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={nav_logo} alt={nav_logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <IoIosMenu id="nav-menu-icon" />
      {/* <span class="navbar-toggler-icon"></span> */}
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="nav-link"  href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link"  href="/menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    
      {
        data ? (
          <div className='d-flex' id="d-flex">
 <a id="d-flex-cart" href="/"><FaShoppingCart id="d-flex-cart-ico" /></a>
 <a id="d-flex-user" href="/"><FaUser id="d-flex-user-ico" /></a>
              </div>
        ) : (
          <div className='d-flex' id="d-flex">
                    <button onClick={ () => window.location.href=`/login` } id="navbar-login-button">Login / Register</button>
              </div>
        )
      }
     
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
