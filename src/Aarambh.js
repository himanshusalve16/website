import React from 'react';
import './EventPage1.css';

const Aarambh = () => {
  const images = [
    "https://example.com/aarambh1.jpg",
    "https://example.com/aarambh2.jpg",
    "https://example.com/aarambh3.jpg",
    "https://example.com/aarambh4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>AARAMBH FOUNDATION WEEK</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Aarambh ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Aarambh;
