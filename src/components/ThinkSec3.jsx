import React from 'react';
import connect from '../assets/connect.png'
import './ThinkSec.css'; // Import the CSS file

const ThinkSec3 = () => {
  return (
    <>
    <div className="container">
      <div className="left-section">
        <h1 className="think-heading">Engage</h1>
        <div className="geometric-shape">
          {/* This is where the 3D geometric shape with colorful sphere would go */}
          {/* You would likely use a 3D library or SVG for this */}
          <img src={connect} alt="" />
        </div>
      </div>
      
      <div className="right-section">
        <p className="intro-text">
        We make it easier to engage with the audience. As an extension, we use social media, packaging, and other print collaterals to push people to take action
        </p>
        
        <div className="services-grid">
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Public Relations</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Social Media</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Launch</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Activations</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Management</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Crypto Marketing</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Investor Relations</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Community Management</span>
            </div>
          </div>
          
          
        </div>
        
        <button className="read-more-btn">Read More</button>
      </div>
    </div>


    <div className="brand-story-container">
      <p className="brand-story-text">
        No matter the industry, your brand has a story to tell. 
        We work with people from various sectors and make branding 
        part of their business transformation.
      </p>
    </div>
  
    </>
  );
};

export default ThinkSec3;
