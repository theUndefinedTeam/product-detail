import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import getReviewPoints from '../../utils/getReviewPoints';
const StarReviews = ({ reviewMeta }) => {
  const { ratings } = reviewMeta;
  const [reviewPointArr, setReviewPointArr] = useState([]);

  useEffect(() => {
    setReviewPointArr(getReviewPoints(ratings));
  }, []);

  return (
    <div>
      {reviewPointArr.map((points, i) => (
        <Star key={i} starPoints={points} />
      ))}
    </div>
  );
};

StarReviews.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
};

export default StarReviews;
