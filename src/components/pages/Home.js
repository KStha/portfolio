import React from "react";
import Profile from "../../components/pages/profile/Profile";
import Contact from "../../components/pages/contact/Contact";
import About from "../../components/pages/about/About";
import Education from "../../components/pages/education/Education";
import Experience from "../../components/pages/experiences/Experience";

import Skills from "../../components/pages/skills/Skills";

const Home = () => {
  return (
    <>
      <section>
        <div className='row sameHeight'>
          <div className='col s12 m12 l4 light-blue darken-4 sameHeigt_child'>
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className="col s12 m12 l8 white sameHeight_child">
            <About />
            <Education />
            <Experience />
            
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
