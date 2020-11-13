import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

const ThumbnailImage = ({
  image,
  currentStyleIdx,
  setCurrentStyleIdx,
  thumbNailIdx,
}) => {
  return (
    <div>
      <Image
        src={image}
        style={styles}
        alt='product-image'
        rounded
        className='m-1'
        onClick={() => setCurrentStyleIdx(thumbNailIdx)}
      />
    </div>
  );
};
const styles = {
  // height: 'auto',
  maxHeight: '150px',
  maxWidth: '100px',
};

ThumbnailImage.propTypes = {
  image: PropTypes.string.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
};

export default ThumbnailImage;
