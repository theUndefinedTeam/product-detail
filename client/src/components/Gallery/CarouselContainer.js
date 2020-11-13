import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel, Col } from 'react-bootstrap';
import ThumbnailGallery from './ThumbnailGallery';
const CarouselContainer = ({
  styles,
  currentStyleIdx,
  imageUrls,
  setCurrentStyleIdx,
}) => {
  return (
    <Col>
      <Carousel indicators={false} style={carouselStyles}>
        {styles.map((style) => (
          <Carousel.Item key={style.style_id} interval={40000}>
            <Image
              className='d-block w-100'
              src={imageUrls[currentStyleIdx].url}
              style={{ maxHeight: '80vh' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <ThumbnailGallery
        styles={styles}
        imageUrls={imageUrls}
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
        style={thumbnailGalleryStyles}
      />
    </Col>
  );
};
const carouselStyles = {
  boxShadow: '2px 3px 4px 2px #abb3ae',
};
const thumbnailGalleryStyles = {
  marginTop: '-150px',
};

CarouselContainer.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default CarouselContainer;
