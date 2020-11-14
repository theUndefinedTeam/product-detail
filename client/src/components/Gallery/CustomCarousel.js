import React from 'react';
import PropTypes from 'prop-types';
import './CustomCarousel.css';
import imageUrls from '../../urlData/urls';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const CustomCarousel = ({
  currentStyleIdx,
  setCurrentStyleIdx,
  styles,
  imageUrls,
}) => {
  const handleChevron = (dir) => {
    if (dir === 'prev' && currentStyleIdx > 0) {
      setCurrentStyleIdx(currentStyleIdx - 1);
    }
    if (dir === 'next' && currentStyleIdx < imageUrls.length - 1) {
      setCurrentStyleIdx(currentStyleIdx + 1);
    }
  };
  return (
    <div id='carousel'>
      <i
        className='fas fa-chevron-left'
        onClick={() => handleChevron('prev')}
      />
      <img className='slide' src={imageUrls[currentStyleIdx].url} />
      <span>
        <i
          className='fas fa-chevron-right'
          onClick={() => handleChevron('next')}
        />
      </span>
    </div>
  );
};
const carouselStyles = {
  maxHeight: '80vh',
  // boxShadow: '2px 3px 4px 2px #abb3ae',
  display: 'flex',
  alignItems: 'center',
};
const rightChevronStyles = {
  // marginRight: '-100px',
  height: '40px',
  zIndex: 9,
  color: 'black',
};
CustomCarousel.propTypes = {
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
  imageUrls: PropTypes.array.isRequired,
  styles: PropTypes.array.isRequired,
};

export default CustomCarousel;
