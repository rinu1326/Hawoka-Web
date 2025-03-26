import React from 'react';
import create from '../assets/create.png'
import './ThinkSec.css'; // Import the CSS file

const ThinkSec2 = () => {
  return (
    <>
    <div className="container">
      <div className="left-section">
        <h1 className="think-heading">Create</h1>
        <div className="geometric-shape">
          {/* This is where the 3D geometric shape with colorful sphere would go */}
          {/* You would likely use a 3D library or SVG for this */}
          <img src={create} alt="" />
        </div>
      </div>
      
      <div className="right-section">
        <p className="intro-text">
        Moonbox elevate brand experience through visual and verbal expression. After perfecting the message, we go for unique as we fine-tune the look and the language
        </p>
        
        <div className="services-grid">
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Logo Design</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Guidelines</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Design System</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">UI/UX Design</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Brand Communication</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">Video & Animation</span>
            </div>
          </div>
          
          <div className="service-row">
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">NFT Projects</span>
            </div>
            <div className="service-item">
              <span className="arrow">→</span>
              <span className="service-name">AR/VR/3D Experiences</span>
            </div>
          </div>
          
          
        </div>
        
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  
    </>
  );
};

export default ThinkSec2;
