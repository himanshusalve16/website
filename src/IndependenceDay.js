import React from 'react';
import './EventPage1.css';

const IndependenceDay = () => {
  const images = [
    "https://example.com/independence1.jpg",
    "https://example.com/independence2.jpg",
    "https://example.com/independence3.jpg",
    "https://example.com/independence4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>INDEPENDENCE DAY</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Independence Day ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default IndependenceDay;
