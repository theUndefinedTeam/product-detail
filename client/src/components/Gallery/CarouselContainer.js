import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
import ThumbnailGallery from './ThumbnailGallery';
import CustomCarousel from './CustomCarousel';

const CarouselContainer = () => {
  const productContext = useContext(ProductContext);
  const {
    images,
    currentImage,
    setCurrentImage,
    currentStyleIdx,
  } = productContext;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <CustomCarousel
        style={{ maxHeight: '80vh' }}
        imageUrls={images[currentStyleIdx]}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <ThumbnailGallery
        imageUrls={images[currentStyleIdx]}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        style={thumbnailGalleryStyles}
      />
    </div>
  );
};

const thumbnailGalleryStyles = {
  marginTop: '-100px',
};

CarouselContainer.propTypes = {};

export default CarouselContainer;
