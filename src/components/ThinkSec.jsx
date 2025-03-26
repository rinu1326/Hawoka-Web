import React from 'react';
import think1 from '../assets/think1.png'
import './ThinkSec.css'; // Import the CSS file

const ThinkSec = () => {
  return (
    <>
    <div className="container">
      <div className="left-section">
        <h1 className="think-heading">Think</h1>
        <div className="geometric-shape">
          {/* This is where the 3D geometric shape with colorful sphere would go */}
          {/* You would likely use a 3D library or SVG for this */}
          <img src={think1} alt="Think Graphic" />
        </div>
      </div>
      
      <div className="right-section">
        <p className="intro-text">
          We start with strategy. Branding requires consistency, so we lay down the 
          groundwork for impactful and coherent messaging. We make ideas make sense
        </p>
        
        <div className="services-grid">
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Strategy</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Architecture</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Market Research</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Positioning</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Audit</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Naming</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Content Framework</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Migration</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Web3 Consulting</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Collaboration Planning</span>
            </div>
          </div>
        </div>
        
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  
    </>
  );
};

export default ThinkSec;
