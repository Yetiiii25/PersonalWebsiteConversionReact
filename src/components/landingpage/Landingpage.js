import './LandingStyles.css'



const Landingpage = () => {



  return (
    <>
    <section class="text-center">
    <div class="container">
      <div class="row align-items-center justify-content-between d-sm-flex">
        <img class="deinen img-fluid mx-auto pb-2" src="images/Deinen1.png" alt=""/>
        <div class="paddings">
          <h1 class="pt-4 pb-4">Hi I'm Deinen!<span class="text-warning"></span></h1>
          <p class="lead">
            My full name is Deinen Ryio M. Flores. I'm Currently, a student-athlete at San Sebastian College Recoletos-Manila, pursuing Bachelor of
            Science in Computer Science specializing in Software Engineering Track.
          </p>

          <p class="lead">
            Throughout my life, my love for computers will always live in my heart. I remember enjoying the subject of
            Computer since I was in Pre School since then I always top my computer subjects class. But why? it is also
            for the love for video games. I remember the 6 years old me, being curious about how a computer works, and
            how does Ragnarok works on pc.
          </p>

          <p class="lead">
            Then that's me a visual representation of myself, coding, and having iced coffee on the side! perfect.
            Struggles hit me hard when I reached College, it came from the codes that I can't understand or solve, from
            my first Soft Eng Project, and lastly my Capstone Project. When I'm not writing code, you can find me at the
            gym, the pool, or inside my room. Reading self-growth books or trading, messing up my crypto portfolio.
          </p>
        </div>
      </div>

      </div>
   
  </section>

  <div class="container clearfix">
    <hr/>
  </div>

  {/* <!------------TECH STACK CARDS-----------------> */}

<section id="home" class="bg-white text-black p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
  <div class="container">
    <div class="row align-items-center justify-content-between d-sm-flex ">
      <div class="col-md">
        <h1>Technology Stack<span class="text-warning"> </span></h1>

      </div>
    </div>
  </div>
</section>

<section class="cards">

  <div class="services">
    <div class="service">
      <div class="icon">
        <img src="Images/techstack/netcore.png" alt=""/>
      </div>
      <h2>.NET & .NET Core</h2>
      <p><>&#8226;</> C# Programming Language</p>
      <p><>&#8226;</> Entity Framework</p>
      <p><>&#8226;</> Xamarin Forms</p>
      <p><>&#8226;</> Windows Forms</p>
    </div>

    <div class="service">
      <div class="icon">
        <img src="Images/techstack/java.png" alt=""/>
      </div>
      <h2>JAVA</h2>
      <p><>&#8226;</> Android Studio Mobile App Development</p>
      <p><>&#8226;</> Object Oriented Programming</p>

    </div>

    <div class="service">
      <div class="icon">
        <img src="Images/techstack/azure.png" alt=""/>
      </div>
      <h2>Azure Cognitive Services</h2>

      <p><>&#8226;</> Custom Vision</p>
      <p><>&#8226;</> Computer Vision</p>

    </div>

    <div class="service">
      <div class="icon">
        <img src="Images/techstack/mssql.png" alt=""/>
      </div>
      <h2>MS SQL</h2>
      <p><>&#8226;</> Database Management System</p>
    </div>

    <div class="service">
      <div class="icon">
        <img class="firebase p-2" src="Images/techstack/phpmyadmin.png" alt=""/>
      </div>
      <h2 class="pt-2">PHPMYADMIN</h2>
      <p><>&#8226;</> Crud</p>
      <p><>&#8226;</> Database Management System</p>
    </div>


    <div class="service">
      <div class="icon">
        <img src="Images/techstack/firebase.png" alt=""/>
      </div>
      <h2>FIREBASE</h2>
      <p><>&#8226;</> Cloud Service</p>
    </div>

    <div class="service">
      <div class="icon">
        <img src="techstack/html.png" alt=""/>
        <img class="firebase" src="Images/techstack/css.png" alt=""/>
      </div>
      <h2>HTML/CSS</h2>
      <p><>&#8226;</> Creating Website</p>
      <p><>&#8226;</> Web Design</p>
    </div>

    <div class="service">
      <div class="icon">
        <img class="firebase" src="Images/techstack/js.png" alt=""/>
      </div>
      <h2>JAVASCRIPT</h2>
      <p><>&#8226;</> Adding interactive behavior to web pages</p>

    </div>

    <div class="service">
      <div class="icon">
        <img src="Images/techstack/bootstrap.png" alt=""/>
      </div>
      <h2>BOOTSTRAP</h2>

    </div>


  </div>
</section>


{/* <!------------------------LINE BREAK----------------------------> */}
  <div class="container clearfix">
    <hr />
  </div>




  {/* <!------------------------QUALIFICATION----------------------------> */}


  <qualification>

    

    <section class="qualification section">
      <h2 class="section__title">Qualification</h2>
      <span class="section__subtitle">My Personal Journey</span>

      <div class="qualification__container container">
        <div class="qualification__tabs">
          <div class="qualification__button button--flex qualification__active" data-target="#education">
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div class="qualification__button button--flex" data-target="#work">
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>



        <div class="qualification__sections">
          {/* <!-- Qualification content 1--> */}
          <div class="qualification__content qualification__active" data-content id="education">
            {/* <!-- Qualification 1--> */}
            <div class="qualification__data">
              <div class="qualification__education">
                <h3 class="qualification__title">BS - Computer Science</h3>
                <span class="qualification__subtitle">San Sebastian College Recoletos - Manila</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calender"></i>
                  2018 - Present
                </div>
              </div>

              <div>
                <span class="qualification__rounder"> </span>
                <span class="qualification__line"> </span>
              </div>
            </div>

            {/* <!-- Qualification 2--> */}
            <div class="qualification__data">
              <div></div>

              <div>
                <span class="qualification__rounder"> </span>
                <span class="qualification__line"> </span>
              </div>

              <div>
                <h3 class="qualification__title">Senior High School</h3>
                <span class="qualification__subtitle">San Sebastian College Recoletos - Manila</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calender"></i>
                  2016 - 2018
                </div>
              </div>


            </div>

            {/* <!-- Qualification 3--> */}
            <div class="qualification__data">
              <div class="qualification__education">
                <h3 class="qualification__title">Junior High School</h3>
                <span class="qualification__subtitle">San Sebastian College</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calender"></i>
                  2012 - 2016
                </div>
              </div>

              <div>
                <span class="qualification__rounder"> </span>
                <span class="qualification__line"> </span>
              </div>
            </div>

            {/* <!-- Qualification 4--> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"> </span>
                {/* <!-- <span class="qualification__line">  </span>--> */}
              </div>
              <div>
                <h3 class="qualification__title">Grade School</h3>
                <span class="qualification__subtitle">San Sebastian College</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calender"></i>
                  2012
                </div>
              </div>


            </div>
          </div>

          {/* <!-- Qualification content 2--> */}

          <div class="qualification__content" data-content id="work">
            {/* <!--=============== QUALIFICATION 1 ===============--> */}
            <div class="qualification__data">
              <div class="qualification__education">
                <h3 class="qualification__title">Tech Support Agent - Coin Listing</h3>
                <span class="qualification__subtitle">STB</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  January 2021 - Present
                </div>
              </div>

              <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 2 ===============--> */}
            <div class="qualification__data">
              <div></div>

              <div class="qualification__time">
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
              </div>

              <div>
                <h3 class="qualification__title">Head Project Coordinator</h3>
                <span class="qualification__subtitle">Muhon Constructions</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  January 2021 - December 2021
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 3 ===============--> */}
            <div class="qualification__data">
              <div class="qualification__education">
                <h3 class="qualification__title">Starbucks Barista</h3>
                <span class="qualification__subtitle">Glorietta 3</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  October 2018 - January 2019
                </div>
              </div>


              <div>
                <span class="qualification__rounder"> </span>
                <span class="qualification__line"> </span>
              </div>
            </div>

            {/* <!-- Qualification 4--> */}
            <div class="qualification__data">
              <div></div>
              <div>
                <span class="qualification__rounder"> </span>
                <span class="qualification__line"> </span>
              </div>
              <div>
                <h3 class="qualification__title">Swimming Instructor</h3>
                <span class="qualification__subtitle">Aqua Sprint Swim Team</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calender"></i>
                  March - May, Year 18' 17' 16'
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION 5 ===============--> */}
            <div class="qualification__data">

              <div class="qualification__education">
                <h3 class="qualification__title">Work Immersion</h3>
                <span class="qualification__subtitle">Creotech Philippines Tech</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  May 2018
                </div>
              </div>


              <div>
                <span class="qualification__rounder"> </span>

              </div>
            </div>






          </div>
        </div>
      </div>
    </section>
  </qualification>

  {/* <!-- Question Accordion --> */}
  <section id="questions" class="p-5">
    <div class="container">
      <h2 class="text-center mb-4">Frequently Asked Questions</h2>
      <div class="accordion accordion-flush" id="questions">
        {/* <!-- Item 1 --> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-one">
              Where exactly are you located?
            </button>
          </h2>
          <div id="question-one" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-two">
              How much does it cost to attend?
            </button>
          </h2>
          <div id="question-two" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-three">
              What do I need to Know?
            </button>
          </h2>
          <div id="question-three" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-four">
              How Do I sign up?
            </button>
          </h2>
          <div id="question-four" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
        {/* <!-- Item 5 --> */}

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#question-five">
              Do you help me find a job?
            </button>
          </h2>
          <div id="question-five" class="accordion-collapse collapse" data-bs-parent="#questions">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              beatae fuga animi distinctio perspiciatis adipisci velit maiores
              totam tempora accusamus modi explicabo accusantium consequatur,
              praesentium rem quisquam molestias at quos vero. Officiis ad
              velit doloremque at. Dignissimos praesentium necessitatibus
              natus corrupti cum consequatur aliquam! Minima molestias iure
              quam distinctio velit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>







  </>
  

  )
}

export default Landingpage