import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel } from 'react-bootstrap';
const CarouselContainer = ({ styles, currentStyleIdx }) => {
  // const directionButton = () => (
  //   <span
  //     aria-hidden='true'
  //     className='carousel-control-prev-icon ml-6'
  //     style={{ marginLeft: 'rem' }}></span>
  // );
  return (
    <Carousel indicators={false}>
      {styles.map((style) => (
        <Carousel.Item key={style.style_id} interval={40000}>
          <Image
            className='d-block w-100'
            src={style.photos[currentStyleIdx].url}
            style={{ maxHeight: '80vh' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

CarouselContainer.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default CarouselContainer;
