import React from 'react';
import Slider from 'react-slick';
import './Contact.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Contact() {
  const reviews = [
    { name: "Arun", review: "Jay Nursery offers a fantastic selection of plants with excellent customer service. They helped me choose the perfect flowers for my balcony." },
    { name: "Divya", review: "I always find healthy, vibrant plants at Jay Nursery. The staff are knowledgeable and friendly." },
    { name: "Karthik", review: "Great nursery with a wide variety of plants and gardening supplies.Highly recommend for all plant enthusiasts!" },
    { name: "Meena", review: "The plants I bought from Jay Nursery have thrived beautifully. Their advice on plant care is spot on." },
    { name: "Rahul", review: "One of the best nurseries in Chennai, Lovely place with a peaceful vibe and top-quality plants. I keep coming back for more!" },
    { name: "Sneha", review: "Loved the organic fertilizers collection, Affordable prices and wonderful plants. Jay Nursery is my go-to for all gardening needs." },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="contact-wrapper">
      {/* Left Side: Contact Info */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p><i className="fas fa-phone" /> Phone: +91 96004 46376</p>
        <p><i className="fas fa-envelope" /> Email: garden@example.com</p>
        <p><i className="fas fa-map-marker-alt" /> Location: 110/172, Canal Bank Rd, Kasturba Nagar, Adyar, Chennai - 600020</p>
      </div>

      {/* Right Side: Reviews Slider */}
      <div className="reviews-slider">
        <h2>Customer Reviews</h2>
        <Slider {...sliderSettings}>
          {reviews.map((item, index) => (
            <div key={index} className="review-card">
              <p>"{item.review}"</p>
              <p className="review-author">- {item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Contact;
