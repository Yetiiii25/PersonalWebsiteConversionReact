import React from 'react'
import './FooterStyles.css'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <>
      {/* <!----------------FOOTER------------------> */}
  <div class="p-2 bg-white text-black text-left position-relative">
    <div class="container clearfix">
      <hr />

      <p>My Portfolio 2022</p>
      <p class="footerp">Designed and Developed by
        <div class="dropup"><button class="dropbtn">Me</button>
          <div class="dropup-content">
            <a href="#"> <img src="Images/html.png" alt="r"/>HTML</a>
            <a href="#"> <img src="Images/css.png" alt=""/>CSS</a>
            <a href="#"> <img src="Images/js.png" alt=""/>Java Script</a>
            <a href="#"> <img src="Images/bootstrap.png" alt=""/>Bootstrap 5</a>
            <a href="#"> <img src="Images/procreate.jpg" alt=""/>Procreate</a>
          </div>
        </div>
      </p>

      {/* <!----------------FOOTER BUTTON UP------------------> */}
        <Link activeClass="active" to="top" spy={true} smooth={true} duration={200}>
        <i class="footerbutton bi bi-arrow-up-square-fill h1 position-absolute bottom-0 end-0 p-5"></i>
        </Link>

    </div>
  </div>
    </>
  )
}

export default Footer