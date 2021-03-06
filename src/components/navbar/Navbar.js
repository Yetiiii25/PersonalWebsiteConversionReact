import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DropDown, DropDownContent, DropDownUl, Header, HomeLink, NavLinkLi, NavLinksUl } from '../styled/NavLinksStyled'



const NavBar = ({ HandleClick }) => {
  useEffect(() => {
    const menuOpen = document.getElementsByClassName('menu cta')[0]
    const menuClose = document.getElementsByClassName('close')[0]
    const overlay = document.getElementsByClassName('overlay')[0]
    menuOpen.addEventListener('click', () => {
      overlay.classList.add("overlay--active");
    });
    menuClose.addEventListener('click', () => {
      overlay.classList.remove("overlay--active");
    });
  })
  
  return (
    <>
      {/* <!--------------NAVBAR------------------> */}
      <Header>
        <HomeLink to='/' className="home">Home</HomeLink>
          <NavLinksUl>
            <NavLinkLi><Link to='/myportfolio'>Portfolio</Link></NavLinkLi>
            <NavLinkLi><Link to='/'>About Me</Link></NavLinkLi>
            <DropDown>
            <NavLinkLi><a href="/#">Connect <>&#9662;</> </a></NavLinkLi>
              <DropDownContent>
                <DropDownUl>
                  <a href="mailto:flores.d@sscrmnl.edu.ph" target="_blank" rel="noreferrer"> <img src="Images/icons8-gmail.svg"
                    alt="r" /><span>Gmail</span> </a>
                  <a href="https://www.linkedin.com/in/deinenflores/" target="_blank" rel="noreferrer"> <img src="Images/linkedin.png"
                    alt="" />Linked In</a>
                  <a href="https://www.facebook.com/universe25/" target="_blank" rel="noreferrer"> <img src="Images/icons8-facebook.svg"
                    alt="" /> Facebook</a>
                  <a href="https://www.Instagram.com/deinennn/" target="_blank" rel="noreferrer"> <img src="Images/icons8-instagram.svg"
                    alt="" />Instagram</a>
                  <a href="https://www.twitter.com/deinennn/" target="_blank" rel="noreferrer"> <img src="Images/icons8-twitter.svg"
                    alt="" />Twitter</a>
                </DropDownUl>
              </DropDownContent>
            </DropDown>
          </NavLinksUl>
        <p className="menu cta" onClick={HandleClick}>Menu</p>
      </Header>
    </>
  );


}




export default NavBar