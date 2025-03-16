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
            ever felt like taking notes was too easy?
            <br></br>
            - use nonotes.
            <br></br>
            ever felt like your grades were too high?
            <br></br>
            - use nonotes.
            <br></br>
            ever wanted to hate yourself?
            <br></br>
            - use nonotes.
          </p>
          <div className="about-divider"></div>
          <p>
            nonotes is made with react, tailwind css, and javascript.
            we include a dynamic interface equipped with a horrible ai assistance,
            terrible writing experience, and a whole lot of headache.

          </p>
          
          <div className="about-divider"></div>
          
          <p>
            you're bad at writing, nonotes will make it <s>worse</s> better.
          </p>
          
          <div className="about-card">
            <h3>our philosophy</h3>
            <p>
              we don't have one. and you shouldnt either.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;