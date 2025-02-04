import React from 'react';
import './EventPage1.css';

const Prerna = () => {
  const images = [
    "https://example.com/prerna1.jpg",
    "https://example.com/prerna2.jpg",
    "https://example.com/prerna3.jpg",
    "https://example.com/prerna4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>PRERNA</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Prerna ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Prerna;
