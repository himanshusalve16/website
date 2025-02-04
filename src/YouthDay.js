import React from 'react';
import './EventPage1.css';

const YouthDay = () => {
  const images = [
    'https://example.com/youth1.jpg',
    'https://example.com/youth2.jpg',
    'https://example.com/youth3.jpg',
    'https://example.com/youth4.jpg',
    'https://example.com/youth5.jpg',
    'https://example.com/youth6.jpg',
    'https://example.com/youth7.jpg',
    'https://example.com/youth8.jpg',
    'https://example.com/youth9.jpg',
    'https://example.com/youth10.jpg'
  ];

  return (
    <div className="event-page">
      <h2 className="event-title">National Youth Day</h2>
      <p className="event-description">
        National Youth Day is celebrated to inspire young minds through various activities like debates, cultural performances, and leadership programs.
      </p>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Youth Day ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default YouthDay;
