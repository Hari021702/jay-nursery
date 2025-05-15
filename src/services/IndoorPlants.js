import React from 'react';
import './IndoorPlants.css';
import indoorImage1 from '../assets/nature-5111414.jpg';
import indoorImage2 from '../assets/pots-716579.jpg';

function IndoorPlants() {
  return (
    <div className="indoor-container">
      
      {/* Section 1: Image Left, Text Right */}
      <div className="section-row">
        <div className="section-image">
          <img src={indoorImage1} alt="Indoor Plant Services" />
        </div>
        <div className="section-text">
          <h2>Indoor Plant Styling</h2>
          <p>
            Breathe new life into your home or office with our stylish indoor plant arrangements. We select plants that suit your space, lighting, and lifestyle to create a serene and healthy indoor environment.
          </p>
          <h2>Our Indoor Services</h2>
          <ul>
            <li><strong>Plant Recommendations:</strong> We help you choose the best low-maintenance or statement plants.</li>
            <li><strong>Pot & Planter Styling:</strong> Elegant pots, stands, and creative arrangements.</li>
            <li><strong>Lighting Assessment:</strong> Match plants to the light conditions in your room.</li>
            <li><strong>Installation & Setup:</strong> Hassle-free delivery and arrangement at your location.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section-row reverse">
        <div className="section-image">
          <img src={indoorImage2} alt="Why Indoor Plants" />
        </div>
        <div className="section-text">
          <h2>Why Indoor Plants?</h2>
          <ul>
            <li>Improve air quality and humidity</li>
            <li>Enhance mood and productivity</li>
            <li>Natural decor with aesthetic value</li>
            <li>Custom styling for every room or workspace</li>
          </ul>

          <h2>Care & Maintenance</h2>
          <p>We offer ongoing maintenance, watering schedules, and replacement plans so your plants always stay healthy and vibrant.</p>

        </div>
      </div>
    </div>
  );
}

export default IndoorPlants;
