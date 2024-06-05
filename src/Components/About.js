import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import intro from '../LottieFiles/intro.json'

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, I'm <b>Sharan Poojari</b>, a passionate coder from Mumbai, India, currently in my second year of BTech IT at VJTI. I code for the sheer joy of it and love exploring various technologies.
As an enthusiastic learner, I'm constantly honing my skills and seeking out exciting coding challenges. In my free time, I enjoy working on personal projects that allow me to experiment and grow as a developer. You can check out some of my mini-projects and experiments in the projects section.
I'm already making strides in the coding world. I'm thrilled to announce that I'm currently participating in the Google Summer of Code (GSOC) program with NumFOCUS, where I have the incredible opportunity to contribute to open-source projects. This experience has further fueled my passion for coding and my desire to make a meaningful impact in the developer community.
I'm always eager to collaborate on new projects and initiatives where I can contribute my skills and continue to learn from others. If you're interested in working together or have any exciting opportunities, please don't hesitate to reach out. You can find my contact details in the footer.
Let's connect and create something amazing together!
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={intro} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Python' />
        <Skills skill='Tailwind' />
        <Skills skill='SQL' />
        <Skills skill="MariaDB" />
      </div>
    </>
  )
}

export default About