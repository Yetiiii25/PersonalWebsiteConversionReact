import React from 'react'
import './HamburgerStyle.css'
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";

const Hamburger = () => {
  
  return (
    <div>
        
 {/* <!--------------HAMBURGER MENU------------------> */}
 <div class="overlay">
    <a class="close">&times;</a>



    <div class="overlay__content">
      <a href="index.html">Home</a>
      <a href="aboutme.html">About Me</a>
      <a href="portfolio.html">Porfolio</a>
      <div class="row">
        <div class="column"> <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank"> <img
              src="Images/icons8-gmail.svg" alt=""/></a></div>
        <div class="column"> <a href="https://www.linkedin.com/in/deinenflores/" target="_blank"> <img
              src="Images/linkedin.png" alt=""/></a></div>
        <div class="column"> <a href="https://www.facebook.com/universe25/" target="_blank"> <img
              src="Images/icons8-facebook.svg" alt=""/></a></div>
        <div class="column"> <a href="https://www.Instagram.com/deinennn/" target="_blank"> <img
              src="Images/icons8-instagram.svg" alt=""/></a></div>
        <div class="column"> <a href="https://www.twitter.com/deinennn/" target="_blank"> <img
              src="Images/icons8-twitter.svg" alt=""/></a></div>
      </div>
    </div>
  </div>
    </div>
  )



  
}



export default Hamburger