import React from 'react';
import './Gardening.css';
import gardenImage from '../assets/spray-7735554.jpg';
import secondImage from '../assets/lawn-mower-2127637.jpg'; 

function Gardening() {
  return (
    <div className="gardening-container">
      {/* Section 1: Image Left, Text Right */}
      <div className="section-row">
        <div className="section-image">
          <img src={gardenImage} alt="Gardening Service" />
        </div>
        <div className="section-text">
          <h2>Professional Gardening Services</h2>
          <p>
            Transform your outdoor space with our expert gardening services. Whether you need a one-time cleanup or regular maintenance, we’re here to help you keep your garden healthy, beautiful, and thriving all year round.
          </p>
          <h3>Our Services</h3>
          <ul>
            <li><strong>Lawn Care & Mowing:</strong> Keep your lawn lush, green, and perfectly trimmed.</li>
            <li><strong>Hedge Trimming & Pruning:</strong> Shape and maintain hedges, trees, and shrubs.</li>
            <li><strong>Garden Clean-Ups:</strong> Remove weeds, leaves, and debris.</li>
            <li><strong>Weeding & Mulching:</strong> Control weeds and nourish with mulch.</li>
            <li><strong>Planting & Garden Design:</strong> Complete garden makeovers.</li>
            <li><strong>Irrigation System Maintenance:</strong> Keep plants watered efficiently.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section-row reverse">
        <div className="section-image">
          <img src={secondImage} alt="Why Choose Us" />
        </div>
        <div className="section-text">
          <h2> Why Choose Us?</h2>
          <ul>
            <li>Experienced, friendly gardeners</li>
            <li>Reliable and punctual service</li>
            <li>Custom plans tailored to your needs</li>
            <li>Eco-friendly practices</li>
            <li>Fully insured and professional team</li>
          </ul>
          <h3>Flexible Scheduling</h3>
          <p>We offer weekly, bi-weekly, and monthly maintenance plans, <br/> or one-time visits based on your needs.</p>

          <h3>Serving Chennai</h3>
          <p>We proudly serve homes and businesses in Chennai  <br/>and surrounding areas. Let us bring your garden to life.</p>

        </div>
      </div>
    </div>
  );
}

export default Gardening;
