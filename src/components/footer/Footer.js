import React from 'react'
import './FooterStyles.css'
const Footer = () => {
  return (
    <>
      {/* <!----------------FOOTER------------------> */}
      <div className="p-2 bg-white text-black text-left position-relative">
        <div className="container clearfix">
          <hr />
          <p>My Portfolio 2022</p>
          <p className="footerp">Designed and Developed by </p>
          <div className="dropup"><button className="dropbtn">Me</button>
            <div className="dropup-content">
              <a href="/#"> <img src="Images/html.png" alt="r" />HTML</a>
              <a href="/#"> <img src="Images/css.png" alt="" />CSS</a>
              <a href="/#"> <img src="Images/js.png" alt="" />Java Script</a>
              <a href="/#"> <img src="Images/bootstrap.png" alt="" />Bootstrap 5</a>
              <a href="/#"> <img src="Images/procreate.jpg" alt="" />Procreate</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer