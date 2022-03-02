import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyle.css'



function Navbar(){

 
    return (
      <>
        {/* <!--------------NAVBAR------------------> */}
        <header class="header" id="myHeader" name='top'>
  <Link to='/' class="home">Home</Link>
    <nav>
      <ul class="nav__links">
        <li><Link to='/myportfolio'>Portfolio</Link></li>
        <li><Link to='/'>About Me</Link></li>
        <div class="dropdown">
          <li class="dropbtn"><a href="#">Connect <>&#9662;</> </a></li>
          <div class="dropdown-content">
            <ul class="dropdownUl">
              <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank"> <img src="Images/icons8-gmail.svg"
                  alt="r"/><span>Gmail</span> </a>
              <a href="https://www.linkedin.com/in/deinenflores/" target="_blank"> <img src="Images/linkedin.png"
                  alt=""/>Linked In</a>
              <a href="https://www.facebook.com/universe25/" target="_blank"> <img src="Images/icons8-facebook.svg"
                  alt=""/> Facebook</a>
              <a href="https://www.Instagram.com/deinennn/" target="_blank"> <img src="Images/icons8-instagram.svg"
                  alt=""/>Instagram</a>
              <a href="https://www.twitter.com/deinennn/" target="_blank"> <img src="Images/icons8-twitter.svg"
                  alt=""/>Twitter</a>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
    <p class="menu cta">Menu</p>

  </header>
      </>
    );

    
}

export default Navbar