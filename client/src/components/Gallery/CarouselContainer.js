import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel } from 'react-bootstrap';
const CarouselContainer = ({ styles, currentStyleIdx, imageUrls }) => {
  // const directionButton = () => (
  //   <span
  //     aria-hidden='true'
  //     className='carousel-control-prev-icon ml-6'
  //     style={{ marginLeft: 'rem' }}></span>
  // );
  return (
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
  );
};
const carouselStyles = {
  boxShadow: '2px 3px 4px 2px #abb3ae',
};

CarouselContainer.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default CarouselContainer;
