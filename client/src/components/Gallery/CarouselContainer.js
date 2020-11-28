import React, { useContext } from 'react';
import ProductContext from '../../context/product/productContext';
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
        imageUrls={images[currentStyleIdx]}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
    </div>
  );
};

CarouselContainer.propTypes = {};

export default CarouselContainer;
