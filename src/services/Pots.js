import React from 'react';
import './Pots.css';
import potImage1 from '../assets/plant-pot-2545368.jpg';      
import potImage2 from '../assets/plant-pot-1028430.jpg';     

function PotServices() {
  return (
    <div className="pot-container">
      {/* Section 1: Image Left, Text Right */}
      <div className="section-row">
        <div className="section-image">
          <img src={potImage1} alt="Pot Arrangement" />
        </div>
        <div className="section-text">
          <h2>Elegant Pot Arrangement Services</h2>
          <p>
            Beautify your space with custom pot arrangements that fit any balcony, garden, or indoor area. Our pot solutions bring greenery into even the smallest corners of your home.
          </p>
          <h2>Our Pot Services Include:</h2>
          <ul>
            <li><strong>Decorative Pot Setup:</strong> Aesthetic arrangements using ceramic, clay, and fiber pots.</li>
            <li><strong>Indoor & Outdoor Pots:</strong> Stylish pot placement for any space.</li>
            <li><strong>Vertical Pot Walls:</strong> Space-saving vertical installations for urban gardens.</li>
            <li><strong>Self-Watering Pots:</strong> Hassle-free maintenance options.</li>
            <li><strong>Pot Painting & Customization:</strong> Personalized designs to match your decor.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section-row reverse">
        <div className="section-image">
          <img src={potImage2} alt="Pot Decoration" />
        </div>
        <div className="section-text">
          <h2>Why Choose Our Pot Services?</h2>
          <ul>
            <li>Creative and customized designs</li>
            <li>Durable and weather-resistant materials</li>
            <li>Perfect for balconies, apartments, and offices</li>
            <li>Affordable packages with regular upkeep options</li>
            <li>Handled by experienced pot designers</li>
          </ul>
          <h2>Contact Us</h2>
          <p>Let’s transform your space with elegant pots — Reach out today!</p>
        </div>
      </div>
    </div>
  );
}

export default PotServices;
