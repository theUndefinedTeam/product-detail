import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel, Col } from 'react-bootstrap';
import ThumbnailGallery from './ThumbnailGallery';
import CustomCarousel from './CustomCarousel';

const CarouselContainer = ({
  styles,
  currentStyleIdx,
  imageUrls,
  setCurrentStyleIdx,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <CustomCarousel
        src={imageUrls[currentStyleIdx].url}
        style={{ maxHeight: '80vh' }}
        styles={styles}
        imageUrls={imageUrls}
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
      />
      <ThumbnailGallery
        styles={styles}
        imageUrls={imageUrls}
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
        style={thumbnailGalleryStyles}
      />
    </div>
  );
};
const carouselStyles = {
  // boxShadow: '2px 3px 4px 2px #abb3ae',
};
const thumbnailGalleryStyles = {
  marginTop: '-100px',
};

CarouselContainer.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default CarouselContainer;
