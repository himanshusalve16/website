import React from 'react';
import './EventPage1.css';

const BloodDonation = () => {
  const images = [
    'https://example.com/blood1.jpg',
    'https://example.com/blood2.jpg',
    'https://example.com/blood3.jpg',
    'https://example.com/blood4.jpg',
    'https://example.com/blood5.jpg',
    'https://example.com/blood6.jpg',
    'https://example.com/blood7.jpg',
    'https://example.com/blood8.jpg',
    'https://example.com/blood9.jpg',
    'https://example.com/blood10.jpg'
  ];

  return (
    <div className="event-page">
      <h2 className="event-title">Blood Donation Camp</h2>
      <p className="event-description">
        The Blood Donation Camp aims to save lives by encouraging students and faculty to donate blood. Many volunteers actively participate in this noble cause.
      </p>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Blood Donation ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default BloodDonation;
