import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import ThumbnailGallery from './ThumbnailGallery';
import ReactImageMagnify from 'react-image-magnify';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomCarousel = ({ currentImage, setCurrentImage, imageUrls }) => {
  const [expandedView, toggleExpandedView] = useState(false);

  const carouselRef = useRef(null);

  const handleChevron = (dir) => {
    if (dir === 'prev' && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
    if (dir === 'next' && currentImage < imageUrls.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <>
      <div
        id='carousel'
        className='carousel img-magnifier-container'
        ref={carouselRef}
        onClick={(e) =>
          !e.target.classList.contains('chevron') &&
          toggleExpandedView(!expandedView)
        }>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className='chevron'
          onClick={() => handleChevron('prev')}
        />
        {!expandedView && (
          <Image
            loading='lazy'
            className='slide '
            id='myimage'
            src={imageUrls[currentImage].url}
            rounded
            alt={document.title}
          />
        )}
        {expandedView && (
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                src: imageUrls[currentImage].url,
                width: 750,
                height: 500,
                enlargedImagePosition: 'over',
              },
              largeImage: {
                enlargedImagePosition: 'over',
                src: imageUrls[currentImage].url,
                width: 1500,
                height: 1000,
              },
            }}
            alt={document.title}
            style={{ zIndex: '80', display: 'flex' }}
          />
        )}
        <span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='chevron'
            onClick={() => handleChevron('next')}
          />
        </span>
      </div>

      <ThumbnailGallery
        className='chevron'
        imageUrls={imageUrls}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </>
  );
};

CustomCarousel.propTypes = {
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
  imageUrls: PropTypes.array.isRequired,
};

export default CustomCarousel;
