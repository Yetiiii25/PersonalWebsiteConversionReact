import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyle.css'




const Navbar = ({HandleClick}) => {

  
  useEffect (() => {
   
   
    const menuOpen = document.getElementsByClassName('menu cta')[0]
    const menuClose = document.getElementsByClassName('close')[0]
    const overlay =document.getElementsByClassName('overlay')[0]

     menuOpen.addEventListener('click', () => {
      overlay.classList.add("overlay--active");
    });
    
    menuClose.addEventListener('click', () => {
      overlay.classList.remove("overlay--active");
    });
  
  console.log("hello world")


})

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
          <li class="dropbtn"><a href="/#">Connect <>&#9662;</> </a></li>
          <div class="dropdown-content">
            <ul class="dropdownUl">
              <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"> <img src="Images/icons8-gmail.svg"
                  alt="r"/><span>Gmail</span> </a>
              <a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <img src="Images/linkedin.png"
                  alt=""/>Linked In</a>
              <a href="https://www.facebook.com/universe25/" target="_blank" rel="noreferrer"> <img src="Images/icons8-facebook.svg"
                  alt=""/> Facebook</a>
              <a href="https://www.Instagram.com/deinennn/" target="_blank" rel="noreferrer"> <img src="Images/icons8-instagram.svg"
                  alt=""/>Instagram</a>
              <a href="https://www.twitter.com/deinennn/" target="_blank" rel="noreferrer"> <img src="Images/icons8-twitter.svg"
                  alt=""/>Twitter</a>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
 
    <p class="menu cta" onClick={HandleClick}>Menu</p>

  </header>
      </>
    );

    
}




export default Navbar