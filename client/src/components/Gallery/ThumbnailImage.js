import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ThumbnailImage = ({ image, imgIdx, currentImage, setCurrentImage }) => {
  return (
    <div>
      <Image
        src={image}
        style={currentImage !== imgIdx ? styles : highLightStyle}
        // style={currentStyleIdx !== imgIdx ? styles : highLightStyle}
        alt='product-image'
        rounded
        className='m-1'
        onClick={() => setCurrentImage(imgIdx)}
        // onClick={() => setCurrentStyleIdx(imgIdx)}
      />
    </div>
  );
};
const styles = {
  maxWidth: '90px',
  transition: 'all 0.3s',
  margin: '2rem',
};
const highLightStyle = {
  boxShadow: '1px 2px 2px 1px #CCC',
  maxWidth: '90px',
  transition: 'all 0.08s',
  scale: '1.05',
};

ThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
  currentImage: PropTypes.number.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ThumbnailImage;
