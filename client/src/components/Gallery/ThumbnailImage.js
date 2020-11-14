import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ThumbnailImage = ({
  image,
  currentStyleIdx,
  setCurrentStyleIdx,
  imgIdx,
}) => {
  return (
    <div>
      <Image
        src={image}
        style={currentStyleIdx !== imgIdx ? styles : highLightStyle}
        alt='product-image'
        rounded
        className='m-1'
        onClick={() => setCurrentStyleIdx(imgIdx)}
      />
    </div>
  );
};
const styles = {
  maxWidth: '100px',
  transition: 'all 0.3s',
  margin: '2rem',
};
const highLightStyle = {
  boxShadow: '1px 2px 3px 1px #CCC',
  maxWidth: '100px',
  transition: 'all 0.08s',
  scale: '1.05',
};

ThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
};

export default ThumbnailImage;
