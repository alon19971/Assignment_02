import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    require('./images/download.jpeg'),
    require('./images/download (1).jpeg'),
    require('./images/download (2).jpeg'),
    require('./images/download (3).jpeg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Gallery Image ${currentIndex + 1}`} style={{ width: '100%', height: 'auto' }} />
      <div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
