import React from "react";
import "./LaunchBrand.css";
import logo from "../../assets/ball.png"; // Replace with actual logo path

const LaunchBrand = () => {
  return (
    <div className="launch-brand">
      <div className="content">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
        <h1>Launch your Brand</h1>
        <p className="description">
          With a brand strategy in place, it’s time for the big unveil. Whether it’s an exciting new product or an existing corporate brand that needs a refresh, it needs to have a go-to-market strategy.
        </p>
        <p className="description">
          With comprehensive branding solutions to support your brand expansion, we are one of the leading branding companies in Dubai.
        </p>

        <div className="features">
          <span>Launch Planning</span>
          <span>Brand Activations</span>
          <span>Campaign Development</span>
        </div>

        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default LaunchBrand;

