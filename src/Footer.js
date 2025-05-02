import React from 'react';
import './Footer.css'; // Ensure this is correctly imported

function Footer() {
  return (
    <div className="footer">
      <div className='cont'>
      <h3 className='add'>Address</h3>
      <p>110/172, Canal Bank Rd, <br/> Kasturba Nagar, Adyar, <br/>Chennai - 600020</p>
      <h2>Phone </h2>
      <p className='num'>9600446376</p>
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5516668103896!2d80.2491464!3d13.0005023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267afa174f1b5%3A0x8281ba484744d35f!2sJay%20Nursery!5e0!3m2!1sen!2sin!4v1746181692570!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
}

export default Footer;
