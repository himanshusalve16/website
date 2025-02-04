import React from 'react';
import './EventPage1.css';

const Happython = () => {
  const images = [
    "https://example.com/happython1.jpg",
    "https://example.com/happython2.jpg",
    "https://example.com/happython3.jpg",
    "https://example.com/happython4.jpg"
  ];

  return (
    <div className="event-page">
      <h1>HAPPYTHON</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Happython ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Happython;
