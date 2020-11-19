import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomCarousel.css';
import { Image } from 'react-bootstrap';

const CustomCarousel = ({ currentImage, setCurrentImage, imageUrls }) => {
  const [expandedView, toggleExpandedView] = useState(false);
  const handleChevron = (dir) => {
    if (dir === 'prev' && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
    if (dir === 'next' && currentImage < imageUrls.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <div id='carousel'>
      <span>
        <i
          className='fas fa-chevron-left'
          onClick={() => handleChevron('prev')}
        />
      </span>
      <Image
        className='slide'
        src={imageUrls[currentImage].url}
        onClick={(e) => {
          if (expandedView) {
            e.target.classList.add('expanded');
            e.target.classList.remove('slide');
            toggleExpandedView(!expandedView);
          } else {
            e.target.classList.remove('expanded');
            e.target.classList.add('slide');
            toggleExpandedView(!expandedView);
          }
        }}
        rounded
      />
      <span>
        <i
          className='fas fa-chevron-right'
          onClick={() => handleChevron('next')}
        />
      </span>
    </div>
  );
};

CustomCarousel.propTypes = {
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
  imageUrls: PropTypes.array.isRequired,
};

export default CustomCarousel;
