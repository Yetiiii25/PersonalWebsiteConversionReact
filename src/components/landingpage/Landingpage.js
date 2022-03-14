import './LandingStyles.css'



const LandingPage = () => {


  return (
    <>
      <section className="text-center">
        <div className="container">
          <div className="row align-items-center justify-content-between d-sm-flex">
            <img className="deinen img-fluid mx-auto pb-2" src="images/Deinen1.png" alt="" />
            <div className="paddings">
              <h1 className="pt-4 pb-4">Hi I'm Deinen!<span className="text-warning"></span></h1>
              <p className="lead">
                My full name is Deinen Ryio M. Flores. I'm Currently, a student-athlete at San Sebastian College Recoletos-Manila, pursuing Bachelor of
                Science in Computer Science specializing in Software Engineering Track.
              </p>

              <p className="lead">
                Throughout my life, my love for computers will always live in my heart. I remember enjoying the subject of
                Computer since I was in Pre School since then I always top my computer subjects className. But why? it is also
                for the love for video games. I remember the 6 years old me, being curious about how a computer works, and
                how does Ragnarok works on pc.
              </p>
              <p className="lead">
                Then that's me a visual representation of myself, coding, and having iced coffee on the side! perfect.
                Struggles hit me hard when I reached College, it came from the codes that I can't understand or solve, from
                my first Soft Eng Project, and lastly my Capstone Project. When I'm not writing code, you can find me at the
                gym, the pool, or inside my room. Reading self-growth books or trading, messing up my crypto portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container clearfix">
        <hr />
      </div>
      {/* <!------------TECH STACK CARDS-----------------> */}
      <section id="home" className="bg-white text-black p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="row align-items-center justify-content-between d-sm-flex ">
            <div className="col-md">
              <h1>Technology Stack<span className="text-warning"> </span></h1>
            </div>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="services">
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/netcore.png" alt="" />
            </div>
            <h2>.NET & .NET Core</h2>
            <p><>&#8226;</> C# Programming Language</p>
            <p><>&#8226;</> Entity Framework</p>
            <p><>&#8226;</> Xamarin Forms</p>
            <p><>&#8226;</> Windows Forms</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/java.png" alt="" />
            </div>
            <h2>JAVA</h2>
            <p><>&#8226;</> Android Studio Mobile App Development</p>
            <p><>&#8226;</> Object Oriented Programming</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/azure.png" alt="" />
            </div>
            <h2>Azure Cognitive Services</h2>
            <p><>&#8226;</> Custom Vision</p>
            <p><>&#8226;</> Computer Vision</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/mssql.png" alt="" />
            </div>
            <h2>MS SQL</h2>
            <p><>&#8226;</> Database Management System</p>
          </div>
          <div className="service">
            <div className="icon">
              <img className="firebase p-2" src="Images/techstack/phpmyadmin.png" alt="" />
            </div>
            <h2 className="pt-2">PHPMYADMIN</h2>
            <p><>&#8226;</> Crud</p>
            <p><>&#8226;</> Database Management System</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/firebase.png" alt="" />
            </div>
            <h2>FIREBASE</h2>
            <p><>&#8226;</> Cloud Service</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="techstack/html.png" alt="" />
              <img className="firebase" src="Images/techstack/css.png" alt="" />
            </div>
            <h2>HTML/CSS</h2>
            <p><>&#8226;</> Creating Website</p>
            <p><>&#8226;</> Web Design</p>
          </div>
          <div className="service">
            <div className="icon">
              <img className="firebase" src="Images/techstack/js.png" alt="" />
            </div>
            <h2>JAVASCRIPT</h2>
            <p><>&#8226;</> Adding interactive behavior to web pages</p>
          </div>
          <div className="service">
            <div className="icon">
              <img src="Images/techstack/bootstrap.png" alt="" />
            </div>
            <h2>BOOTSTRAP</h2>
          </div>
        </div>
      </section>
      {/* <!------------------------LINE BREAK----------------------------> */}
      <div className="container clearfix">
        <hr />
      </div>
      {/* <!------------------------QUALIFICATION----------------------------> */}
      <div>
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My Personal Journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active" data-target="#education">
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>
              <div className="qualification__button button--flex" data-target="#work">
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>
            <div className="qualification__sections">
              {/* <!-- Qualification content 1--> */}
              <div className="qualification__content qualification__active" data-content id="education">
                {/* <!-- Qualification 1--> */}
                <div className="qualification__data">
                  <div className="qualification__education">
                    <h3 className="qualification__title">BS - Computer Science</h3>
                    <span className="qualification__subtitle">San Sebastian College Recoletos - Manila</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calender"></i>
                      2018 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    <span className="qualification__line"> </span>
                  </div>
                </div>
                {/* <!-- Qualification 2--> */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    <span className="qualification__line"> </span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Senior High School</h3>
                    <span className="qualification__subtitle">San Sebastian College Recoletos - Manila</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calender"></i>
                      2016 - 2018
                    </div>
                  </div>
                </div>
                {/* <!-- Qualification 3--> */}
                <div className="qualification__data">
                  <div className="qualification__education">
                    <h3 className="qualification__title">Junior High School</h3>
                    <span className="qualification__subtitle">San Sebastian College</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calender"></i>
                      2012 - 2016
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    <span className="qualification__line"> </span>
                  </div>
                </div>
                {/* <!-- Qualification 4--> */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    {/* <!-- <span className="qualification__line">  </span>--> */}
                  </div>
                  <div>
                    <h3 className="qualification__title">Grade School</h3>
                    <span className="qualification__subtitle">San Sebastian College</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calender"></i>
                      2012
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Qualification content 2--> */}
              <div className="qualification__content" data-content id="work">
                {/* <!--=============== QUALIFICATION 1 ===============--> */}
                <div className="qualification__data">
                  <div className="qualification__education">
                    <h3 className="qualification__title">Tech Support Agent - Coin Listing</h3>
                    <span className="qualification__subtitle">STB</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      January 2021 - Present
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                {/* <!--=============== QUALIFICATION 2 ===============--> */}
                <div className="qualification__data">
                  <div></div>
                  <div className="qualification__time">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Head Project Coordinator</h3>
                    <span className="qualification__subtitle">Muhon Constructions</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      January 2021 - December 2021
                    </div>
                  </div>
                </div>
                {/* <!--=============== QUALIFICATION 3 ===============--> */}
                <div className="qualification__data">
                  <div className="qualification__education">
                    <h3 className="qualification__title">Starbucks Barista</h3>
                    <span className="qualification__subtitle">Glorietta 3</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      October 2018 - January 2019
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    <span className="qualification__line"> </span>
                  </div>
                </div>
                {/* <!-- Qualification 4--> */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"> </span>
                    <span className="qualification__line"> </span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Swimming Instructor</h3>
                    <span className="qualification__subtitle">Aqua Sprint Swim Team</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calender"></i>
                      March - May, Year 18' 17' 16'
                    </div>
                  </div>
                </div>
                {/* <!--=============== QUALIFICATION 5 ===============--> */}
                <div className="qualification__data">
                  <div className="qualification__education">
                    <h3 className="qualification__title">Work Immersion</h3>
                    <span className="qualification__subtitle">Creotech Philippines Tech</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      May 2018
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

     {/* <!------------------------LINE BREAK----------------------------> */}
     <div className="container clearfix">
        <hr />
      </div>


      {/* <!-- Question Accordion --> */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion accordion-flush" id="questions">
            {/* <!-- Item 1 --> */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-one">
                  Where exactly are you located?
                </button>
              </h2>
              <div id="question-one" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-two">
                  How much does it cost to attend?
                </button>
              </h2>
              <div id="question-two" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-three">
                  What do I need to Know?
                </button>
              </h2>
              <div id="question-three" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-four">
                  How Do I sign up?
                </button>
              </h2>
              <div id="question-four" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#question-five">
                  Do you help me find a job?
                </button>
              </h2>
              <div id="question-five" className="accordion-collapse collapse" data-bs-parent="#questions">
                <div className="accordion-body">
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

export default LandingPage