import React from 'react';
import './EventPage1.css';

const YogaDay = () => {
  const images = [
    "https://example.com/yoga1.jpg",
    "https://example.com/yoga2.jpg",
    "https://example.com/yoga3.jpg",
    "https://example.com/yoga4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>YOGA DAY</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Yoga Day ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default YogaDay;
