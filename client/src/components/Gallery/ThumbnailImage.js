import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ThumbnailImage = ({
  image,
  currentStyleIdx,
  setCurrentStyleIdx,
  thumbNailIdx,
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
  // height: 'auto',
  maxWidth: '75px',
  transition: 'all 0.3s',
  // border: '1px black solid',
};
const highLightStyle = {
  // border: '1px black solid',
  boxShadow: '1px 2px 3px 1px #888888',
  maxWidth: '75px',
  transition: 'all 0.08s',
  scale: '1.05',
};

ThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
};

export default ThumbnailImage;
