import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
import ThumbnailGallery from './ThumbnailGallery';
import CustomCarousel from './CustomCarousel';

const CarouselContainer = ({
  styles,
  currentStyleIdx,
  imageUrls,
  setCurrentStyleIdx,
}) => {
  const productContext = useContext(ProductContext);
  const { images, currentImage, setCurrentImage } = productContext;
  console.log({ images, imageUrls });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <CustomCarousel
        src={imageUrls[currentImage].url}
        style={{ maxHeight: '80vh' }}
        imageUrls={imageUrls}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <ThumbnailGallery
        imageUrls={imageUrls}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
        style={thumbnailGalleryStyles}
      />
    </div>
  );
};

const thumbnailGalleryStyles = {
  marginTop: '-100px',
};

CarouselContainer.propTypes = {
  currentStyleIdx: PropTypes.number.isRequired,
};

export default CarouselContainer;
