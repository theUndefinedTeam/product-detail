import React from 'react';
import PropTypes from 'prop-types';
import './CustomCarousel.css';
import imageUrls from '../../urlData.js';

const CustomCarousel = ({ currentImageIdx }) => {
  return (
    <div id='carousel-body'>
      <div className='chevron-left'></div>
      {imageUrls.map((url, i) => {
        <img src={url} alt='backpack product' />;
      })}
      <div className='chevron-right'></div>
    </div>
  );
};

CustomCarousel.propTypes = {};

export default CustomCarousel;
