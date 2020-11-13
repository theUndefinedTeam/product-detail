import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailGallery = ({ styles, currentStyleIdx, setCurrentStyleIdx }) => {
  console.log({ styles });
  return (
    <div
      style={{
        height: '100px',
        position: 'relative',
        marginTop: '-150px',
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
        // left: '25%',
      }}>
      {styles.map(
        (style, i) =>
          i <= 4 && (
            <ThumbnailImage
              key={style.style_id}
              image={style.photos[i].url}
              thumbNailIdx={i}
              currentStyleIdx={currentStyleIdx}
              setCurrentStyleIdx={setCurrentStyleIdx}
            />
          )
      )}
    </div>
  );
};

ThumbnailGallery.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default ThumbnailGallery;
