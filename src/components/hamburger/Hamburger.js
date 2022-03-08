import React from 'react'
import './HamburgerStyle.css'
import { Link } from 'react-router-dom'

const Hamburger = () => {
  return (
    <div>
      {/* <!--------------HAMBURGER MENU------------------> */}
      <div className="overlay">
        <a href="/#" className="close">&times;</a>
        <div className="overlay__content">
          <a href="/">Home</a>
          <li><Link to='/myportfolio'>Portfolio</Link></li>
          <li><Link to='/'>About Me</Link></li>
          <div className="row">
            <div className="column"> <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"> <img
              src="Images/icons8-gmail.svg" alt="" /></a></div>
            <div className="column"> <a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <img
              src="Images/linkedin.png" alt="" /></a></div>
            <div className="column"> <a href="https://www.facebook.com/universe25/" target="_blank" rel="noreferrer"> <img
              src="Images/icons8-facebook.svg" alt="" /></a></div>
            <div className="column"> <a href="https://www.Instagram.com/deinennn/" target="_blank" rel="noreferrer"> <img
              src="Images/icons8-instagram.svg" alt="" /></a></div>
            <div className="column"> <a href="https://www.twitter.com/deinennn/" target="_blank" rel="noreferrer"> <img
              src="Images/icons8-twitter.svg" alt="" /></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Hamburger