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
  const [currentMax, setCurrentMax] = useState(4);
  const [currentMin, setCurrentMin] = useState(0);
  const [currentStylePics, setCurrentStylePics] = useState([]);

  useEffect(() => {
    const newArr = imageUrls.slice(currentMin, currentMax);
    setCurrentStylePics(newArr);
  }, [currentMin, currentMax]);

  return (
    <div
      style={{
        height: '100px',
        position: 'relative',
        marginTop: '-105px',
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={chevronStyles}
        onClick={() => {
          if (currentMin > 0) {
            setCurrentMax(currentMax - 1);
            setCurrentMin(currentMin - 1);
          }
        }}
      />
      {currentStylePics.map((style, i) => {
        return (
          <ThumbnailImage
            key={styles[i + currentMin].style_id}
            image={currentStylePics[i].thumbnail_url}
            imgIdx={i + currentMin}
            thumbNailIdx={i}
            currentStyleIdx={currentStyleIdx}
            setCurrentStyleIdx={setCurrentStyleIdx}
          />
        );
      })}

      <FontAwesomeIcon
        icon={faChevronRight}
        style={chevronStyles}
        onClick={() => {
          if (currentMax + 1 < imageUrls.length) {
            setCurrentMax(currentMax + 1);
            setCurrentMin(currentMin + 1);
          }
        }}
      />
    </div>
  );
};

const chevronStyles = {
  color: 'grey',
  opacity: '.7',
  margin: '1rem',
};

ThumbnailGallery.propTypes = {
  styles: PropTypes.array.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
};

export default ThumbnailGallery;
