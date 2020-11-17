import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomCarousel.css';
import imageUrls from '../../urlData/urls';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { Image } from 'react-bootstrap';
const CustomCarousel = ({
  currentStyleIdx,
  setCurrentStyleIdx,
  styles,
  imageUrls,
}) => {
  const [expandedView, toggleExpandedView] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState(`0% 0%`);
  const handleChevron = (dir) => {
    if (dir === 'prev' && currentStyleIdx > 0) {
      setCurrentStyleIdx(currentStyleIdx - 1);
    }
    if (dir === 'next' && currentStyleIdx < imageUrls.length - 1) {
      setCurrentStyleIdx(currentStyleIdx + 1);
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
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
        src={imageUrls[currentStyleIdx].url}
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
const carouselStyles = {
  // maxHeight: '80vh',
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
