import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './CustomCarousel.css';
import { Image } from 'react-bootstrap';
import ThumbnailGallery from './ThumbnailGallery';
import magnify from './imageMagnifier';
import ReactImageMagnify from 'react-image-magnify';

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
          !e.target.classList.contains('fas') &&
          toggleExpandedView(!expandedView)
        }>
        <i
          className='fas fa-chevron-left'
          onClick={() => handleChevron('prev')}
        />
        {!expandedView && (
          <Image
            className='slide'
            id='myimage'
            src={imageUrls[currentImage].url}
            // onClick={(e) => {
            //   if (expandedView) {
            //     magnify(myimage, 10);
            //     carouselRef.current.classList.remove('carousel');
            //     carouselRef.current.classList.add('carousel-expanded');
            //     e.target.classList.add('expanded');
            //     e.target.classList.remove('slide');
            //     toggleExpandedView(!expandedView);
            //   } else {
            //     carouselRef.current.classList.remove('carousel-expanded');
            //     carouselRef.current.classList.add('carousel');
            //     e.target.classList.remove('expanded');
            //     e.target.classList.add('slide');
            //     toggleExpandedView(!expandedView);
            //   }
            // }}
            // onClick={() => toggleExpandedView(!expandedView)}
            rounded
          />
        )}
        {expandedView && (
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: imageUrls[currentImage].url,
                width: 1500,
                height: 1000,
                enlargedImagePosition: 'over',
              },
              largeImage: {
                enlargedImagePosition: 'over',
                src: imageUrls[currentImage].url,
                width: 1500,
                height: 1000,
              },
            }}
            style={{ zIndex: '80' }}
            // onClick={() => toggleExpandedView(!expandedView)}
          />
        )}
        <span>
          <i
            className='fas fa-chevron-right'
            onClick={() => handleChevron('next')}
          />
        </span>
      </div>

      <ThumbnailGallery
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
