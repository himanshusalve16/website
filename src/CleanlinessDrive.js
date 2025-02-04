import React from 'react';
import './EventPage1.css';

const CleanlinessDrive = () => {
  const images = [
    'https://example.com/clean1.jpg',
    'https://example.com/clean2.jpg',
    'https://example.com/clean3.jpg',
    'https://example.com/clean4.jpg',
    'https://example.com/clean5.jpg',
    'https://example.com/clean6.jpg',
    'https://example.com/clean7.jpg',
    'https://example.com/clean8.jpg',
    'https://example.com/clean9.jpg',
    'https://example.com/clean10.jpg'
  ];

  return (
    <div className="event-page">
      <h2 className="event-title">Cleanliness Drive</h2>
      <p className="event-description">
        The Cleanliness Drive focuses on maintaining hygiene and cleanliness on campus and nearby areas. Volunteers take part in various activities like waste management and awareness campaigns.
      </p>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Cleanliness Drive ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default CleanlinessDrive;
