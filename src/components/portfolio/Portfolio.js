import React from 'react'

import {Link} from 'react-router-dom'

const Portfolio = () => {

  
  return (
    <>
    {/* <!--------------1ST SECTION------------------> */}
  <section>
    <div class="container">
      <h2 class="mx-auto p-5">My Recent Projects </h2>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel"></div>
    </div>
  </section>

  {/* <!--------------2ND SECTION------------------> */}
  <section class="overflow-hidden position-relative">
    <div class="row row-cols-1 row-cols-md-2 g-4 px-5">
      <div class="col pb-4">
        <div class="card">
          <img src="Images/Home/Multicountry.png" class="card-img-top" alt="..."/>
          <Link to='/multicountry' class="stretched-link"></Link>
          <div class="card-body">
            <h5 class="card-title text-center">1. MULTI-COUNTRY PAPER BILL SCANNER </h5>
            <p class="card-text text-center">FOR VISUALLY IMPAIRED PEOPLE</p>
          </div>
        </div>
      </div>
      <div class="col pb-4">
        <div class="card">
           <img src="Images/Home/Mywebsite.png" class="card-img-top" alt="..."/> 
           <Link to='/personal' class="stretched-link"></Link>
          <div class="card-body">
            <h5 class="card-title text-center">2. MY PERSONAL WEBSITE</h5>   
            <p class="card-text text-center">AS UNDERGRADUATE STUDENT</p>  
          </div>
        </div>
      </div>
      <div class="col pb-4">
        <div class="card">
          <img src="Images/Home/Patientinfo.png" class="card-img-top" alt="..."/>
          <Link to='/pis' class="stretched-link"></Link>
          <div class="card-body">
            <h5 class="card-title text-center">3. PATIENT INFORMATION SYSTEM</h5>
            <p class="card-text text-center">FOR SSCR MANILA CLINIC</p>
          </div>
        </div>
      </div>
    </div>

  </section>

    </>
  )
}



export default Portfolio