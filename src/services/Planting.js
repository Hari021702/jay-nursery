import React from 'react';
import './Planting.css';
import plantingImage from '../assets/garden-5315602.jpg';
import secondImage from '../assets/planting-1898946.jpg'; // Replace with your second image

function Planting() {
  return (
    <div className="planting-container">
      {/* Section 1: Image Left, Text Right */}
      <div className="section-row">
        <div className="section-image">
          <img src={plantingImage} alt="Planting Service" />
        </div>
        <div className="section-text">
          <h2>Expert Planting Services</h2>
          <p>
            Bring life and color to your garden with our tailored planting services. Whether you're building a new garden from scratch or enhancing an existing space, our team helps you choose and plant the right greenery for your environment.
          </p>

          <h3>What We Offer</h3>
          <ul>
            <li><strong>Seasonal Flower Planting:</strong> Add vibrant colors with seasonal blooms.</li>
            <li><strong>Shrub & Bush Planting:</strong> Decorative and structural greenery.</li>
            <li><strong>Tree Planting:</strong> Shade trees, fruit trees – planted with care.</li>
            <li><strong>Vegetable & Herb Gardens:</strong> Grow your own organic food at home.</li>
            <li><strong>Indoor & Balcony Planting:</strong> Beautify small spaces with pots & vertical gardens.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section-row reverse">
        <div className="section-image">
          <img src={secondImage} alt="Post Planting Support" />
        </div>
        <div className="section-text">
          <h2>Post-Planting Support</h2>
          <p>
            We offer guidance on how to care for your new plants and provide maintenance plans to keep them thriving long term.
          </p>

          <h2>Our Process</h2>
          <p>
            We start with a full site assessment to understand your sunlight, soil, and space. Then we recommend and source the best plants and take care of all the planting work — professionally and efficiently.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Ready to grow your garden? Contact us for a personalized planting consultation today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Planting;
