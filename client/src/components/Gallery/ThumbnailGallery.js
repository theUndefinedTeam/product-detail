import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThumbnailImage from './ThumbnailImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const ThumbnailGallery = ({
  styles,
  currentStyleIdx,
  setCurrentStyleIdx,
  imageUrls,
}) => {
  const [currentMax, setCurrentMax] = useState(5);
  const [currentMin, setCurrentMin] = useState(0);
  const [currentStylePics, setCurrentStylePics] = useState([]);

  useEffect(() => {
    // if (currentStyleIdx >= currentMax && currentMax) {
    //   setCurrentMax(currentStyleIdx);
    //   setCurrentMin(currentMax - 5);
    // }
    const newArr = imageUrls.slice(currentMin, currentMax);
    setCurrentStylePics(newArr);
  }, [currentMin, currentMax, currentStyleIdx]);

  return (
    <div
      style={{
        height: '80px',
        position: 'relative',
        marginTop: '-105px',
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={chevronLeftStyles}
        onClick={() => {
          if (currentMin > 0) {
            setCurrentMax(currentMax - 1);
            setCurrentMin(currentMin - 1);
          }
        }}
      />
      <div id='thumbnail-images' style={thumbnailImagesStyles}>
        {currentStylePics.map((style, i) => (
          <ThumbnailImage
            key={i}
            image={currentStylePics[i].thumbnail_url}
            imgIdx={i + currentMin}
            thumbNailIdx={i}
            currentStyleIdx={currentStyleIdx}
            setCurrentStyleIdx={setCurrentStyleIdx}
          />
        ))}
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        style={chevronRightStyles}
        onClick={() => {
          if (currentMax + 1 <= imageUrls.length) {
            setCurrentMax(currentMax + 1);
            setCurrentMin(currentMin + 1);
          }
        }}
      />
    </div>
  );
};

const chevronRightStyles = {
  position: 'relative',
  color: 'white',
  opacity: '.8',
  fontSize: '1.5em',
  margin: '1rem',
  left: '2.5rem',
};
const chevronLeftStyles = {
  position: 'relative',
  color: 'white',
  opacity: '.8',
  fontSize: '1.5em',
  margin: '1rem',
  right: '3rem',
};
const thumbnailImagesStyles = {
  display: 'flex',
  position: 'relative',
  left: '3.3rem',
  zIndex: '100',
};

ThumbnailGallery.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default ThumbnailGallery;
