import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import coder1 from '../LottieFiles/coder1.json'
import screen from '../LottieFiles/screen.json'

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SHARAN POOJARI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={coder1} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
    I love bringing ideas to life through coding and taking on projects that challenge me.<br /><br />
    I'm good with <b>C++</b> and learning <b>Python</b>, actively working on projects with the <b>MERN</b> stack.<br />
    Currently, I'm exploring different fields and practicing <b>Data Structures and Algorithms (DSA)</b>.<br /><br />
    Outside coding, you'll often find me editing away in front of my laptop screen.
        </p>
        </div>
        <Lottie 
          className="illustration" 
          animationData={screen} 
          loop={true} 
        />
      </div>
    </div>
  )
}

export default Home