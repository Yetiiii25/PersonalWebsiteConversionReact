import React from 'react'

import {Link} from 'react-router-dom'

const Portfolio = () => {



  return (
    <>
    {/* <!--------------1ST SECTION------------------> */}
  <section>
    <div className="container">
      <h2 className="mx-auto p-5">My Recent Projects </h2>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel"></div>
    </div>
  </section>

  {/* <!--------------2ND SECTION------------------> */}
  <section className="overflow-hidden position-relative">
    <div className="row row-cols-1 row-cols-md-2 g-4 px-5">
      <div className="col pb-4">
        <div className="card">
          <img src="Images/Home/Multicountry.png" className="card-img-top" alt="..."/>
          <Link to='/multicountry' className="stretched-link"></Link>
          <div className="card-body">
            <h5 className="card-title text-center">1. MULTI-COUNTRY PAPER BILL SCANNER </h5>
            <p className="card-text text-center">FOR VISUALLY IMPAIRED PEOPLE</p>
          </div>
        </div>
      </div>
      <div className="col pb-4">
        <div className="card">
           <img src="Images/Home/Mywebsite.png" className="card-img-top" alt="..."/> 
           <Link to='/personal' className="stretched-link"></Link>
          <div className="card-body">
            <h5 className="card-title text-center">2. MY PERSONAL WEBSITE</h5>   
            <p className="card-text text-center">AS UNDERGRADUATE STUDENT</p>  
          </div>
        </div>
      </div>
      <div className="col pb-4">
        <div className="card">
          <img src="Images/Home/Patientinfo.png" className="card-img-top" alt="..."/>
          <Link to='/pis' className="stretched-link"></Link>
          <div className="card-body">
            <h5 className="card-title text-center">3. PATIENT INFORMATION SYSTEM</h5>
            <p className="card-text text-center">FOR SSCR MANILA CLINIC</p>
          </div>
        </div>
      </div>
    </div>

  </section>

    </>
  )
}



export default Portfolio