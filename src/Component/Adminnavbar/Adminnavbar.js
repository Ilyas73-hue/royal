import React from 'react';
import nav_logo from "../../RoyalAssets/royal.png";
import { IoIosMenu } from "react-icons/io";
import "./Adminnavbar.css";

const Adminnavbar = () => {

 const logout = () => {
    localStorage.removeItem("token");
        localStorage.removeItem("adminId");
        window.location.href="/admin/login";
 }

  return (
    <div id="admin_navbar">
      <div id="navbar">
       <nav class="navbar navbar-expand-lg" id="navbar-2">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={nav_logo} alt={nav_logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <IoIosMenu id="nav-menu-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" id="nav-link"  href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/admin/product/post">Product Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link"  href="/admin/product">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/admin/order">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav-link" href="/contact">Cancel Order</a>
        </li>
      </ul>
    
      <div className='d-flex' id="d-flex">
                    <button onClick={logout} id="navbar-login-button">Logout</button>
              </div>


   
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default Adminnavbar
