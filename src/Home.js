import React from 'react';
import './Home.css'; 

function Home() {
  const phoneNumber = "919876543210"; // replace with your number
  const message = "Hi, I’m interested in your gardening services!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="home">
      <h3 className='head'>Services We Do</h3>
      <span className='con'>
      <p>Gardening services</p>
      <p>Planting services</p>
      <p>Pots</p>
      <p>In-door plants</p>
      <p>Flower plants</p>
      </span>

       {/* WhatsApp Sticky Button */}
       <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          textDecoration: 'none'
        }}
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}

export default Home;
