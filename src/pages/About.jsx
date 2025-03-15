import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">about nonotes</h1>
        
        {/* <div className="about-image-container">
          <div className="about-image"></div>
        </div> */}
        
        <div className="about-text">
          <p>
            hi, ever wanted to improve your writing? use nonotes. 
          </p>
          
          <div className="about-divider"></div>
          
          <p>
            you're bad at writing, nonotes will make it <s>worse</s> better.
          </p>
          
          <div className="about-card">
            <h3>our philosophy</h3>
            <p>
              we don't have one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;