import React from "react";
import "./HeroSection.css";
import cameraImage from "../../assets/cam.png"; // Update with actual path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bring your<br />Story to Life</h1>
        <p>
          Tell your story in 4K. In an era where video is king, your audio and video
          content strategy can make waves when done the right way. Engage your target
          audience with interactive brand videos created by leading Branding agency Dubai, UAE.
        </p>
        <div className="hero-buttons">
          <button className="btn">Read More</button>
          <button className="btn">Get In Touch</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={cameraImage} alt="Camera" />
      </div>
      <div className="floating-element"></div>
    </section>
  );
};

export default HeroSection;