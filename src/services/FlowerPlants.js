import React from 'react';
import './FlowerPlants.css';
import flowerImage1 from '../assets/flowering-pot-plants-57476.jpg';
import flowerImage2 from '../assets/roses-3481982.jpg';

function FlowerPlants() {
  return (
    <div className="flower-container">
      
      {/* Section 1: Image Left, Text Right */}
      <div className="section-row">
        <div className="section-image">
          <img src={flowerImage1} alt="Flower Plant Services" />
        </div>
        <div className="section-text">
          <h2>Vibrant Flower Planting</h2>
          <p>
            Enhance your garden’s charm with a burst of colors and fragrance. Our flower planting services include a variety of seasonal and perennial blooms to suit your preferences and soil conditions.
          </p>
          <h3>What We Offer</h3>
          <ul>
            <li><strong>Seasonal Flowers:</strong> Brighten up your garden with flowers that flourish throughout the year.</li>
            <li><strong>Perennial Beds:</strong> Long-lasting blooms that return every year with minimal care.</li>
            <li><strong>Color Theme Gardens:</strong> Create a garden based on your favorite colors or moods.</li>
            <li><strong>Fragrant Corners:</strong> Add flowers like jasmine, roses, or lavender for sensory delight.</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Image Right, Text Left */}
      <div className="section-row reverse">
        <div className="section-image">
          <img src={flowerImage2} alt="Why Choose Flower Plants" />
        </div>
        <div className="section-text">
          <h2>Why Choose Flower Plants?</h2>
          <ul>
            <li>Enhance curb appeal and ambiance</li>
            <li>Attract butterflies and bees</li>
            <li>Add color, texture, and fragrance to your space</li>
            <li>Custom flower bed layouts to suit your style</li>
          </ul>

          <h3>Expert Guidance</h3>
          <p>
            We help you choose the right plants for sun, soil, and maintenance levels — ensuring your garden stays beautiful and healthy throughout the seasons.
          </p>

          <h3>Let’s Get Blooming!</h3>
          <p>
            Ready to add life and color to your garden? Contact us for a personalized flower planting plan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlowerPlants;
