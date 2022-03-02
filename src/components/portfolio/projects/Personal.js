import {Link} from 'react-router-dom'

const Personal = () => {
  return (
    <>
    
    {/* <!--------------1ST SECTION------------------> */}

<div class="container">



  <div class="row mb-3 pt-5 align-items-center">

    <div class="col-sm-5">
      <h6>Website</h6>
      <h1>My Personal Website</h1>
    </div>
    <div class="col-sm-7">
      <img class="w-100 img-fluid" src="Images/Home/Mywebsite.png" alt=""/>
    </div>

    <div class="row mb-3">
      <div class="col-sm-12 pt-5">
        <p class="lead">My personal website was made to freshen up my website knowledge and also to prepare, as I'm about to take my internship. 
          It allows me to showcase my portfolio, and my journey. 
        </p>
      </div>
      <div class="col-sm-0"></div>
    </div>




    <div class="row mb-3">

      <div class="col-md-4">
        <div class="h6">
          Website:
        </div>
        <div class="row small">
          <div class="col-md-12">
            <p class="text-muted">Under Construction</p>
          </div>
        </div>
      </div>


      <div class="col-md-8">
        <div class="h6">
          Project Date:
        </div>
        <div class="row small">
          <div class="col-md-12">
            <p class="text-muted">January 2022</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

{/* <!----------------HR---------------------> */}
<div class="container clearfix pb-5">
  <hr />
</div>

{/* <!----------------2ND SECTION---------------------> */}

<div class="container">
  <div class="row mb-3 pb-5">
    <div class="col-sm-5 pb-4 h3">Objectives</div>
    <div class="col-sm-7 lead">The primary objectives of this research were to create an application called
      multi-Country paper bill recognition system for visually impaired. The system is a mobile application for
      Android that will help Visually Impaired to detect and recognize their paper bill and at the same time it able
      to total the amount and convert the scanned paper bill to digital audio.</div>
  </div>

  <div class="row mb-3 pt-5 pb-4">
    <div class="col-sm-5 pb-3 h3">My Role / Planning</div>
    <div class="col-sm-7 lead"> Everything. </div>
  </div>

  <div class="row mb-3 pt-5 pb-4">
    <div class="col-sm-5 h3">Tech Stack</div>
    <div class="col-sm-7 lead"><img class="w-100 img-fluid" src="Images/My Website/techstack.png" alt=""/>
    </div>
  </div>

  <div class="row mb-3 pb-4">
    <div class="col-sm-5 pb-3 h3"></div>
    <div class="col-sm-7 lead"> Html, Css, Js, Procereate and Bootstrap was implemented all through out the project. I used pure css in some sections.
      For the digital image edits, I used Procreate.
    </div>
  </div>

  <div class="row mb-3">
    <div class="col-sm-12 pb-4 pt-5 lead">This project took about 2 weeks to be accomplished it is because of the mental 
      health break - mini vacation I had from school. "I still have many plans and ideas to add in my website but I need to leave it like this because
      classes is will be resumed soon." - January 23, 2021</div>
  </div>


  <div class="row mb-3">
    <div class="col-sm-12 text-center"> 
    <Link class="h5" to='/myportfolio' style={{color:'black', textDecoration:'none'}}>
    <i class="bi bi-arrow-left-circle h2"></i> Back to Recent Projects
    </Link>
    </div>
    </div>


</div>

    </>
  )
}

export default Personal