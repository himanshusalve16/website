import React from 'react';
import './EventPage1.css';

const RepublicDay = () => {
  const images = [
    "https://example.com/republic1.jpg",
    "https://example.com/republic2.jpg",
    "https://example.com/republic3.jpg",
    "https://example.com/republic4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>REPUBLIC DAY</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Republic Day ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default RepublicDay;
