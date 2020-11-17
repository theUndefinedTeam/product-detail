import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './Star.css';
import getReviewPoints from '../../utils/getReviewPoints';

const StarReviews = ({ reviewMeta }) => {
  const { ratings } = reviewMeta;
  const [reviewPointArr, setReviewPointArr] = useState([]);
  const [fillPct, setFillPct] = useState(null);

  useEffect(() => {
    // setReviewPointArr(getReviewPoints(ratings));
    const totalPossibleStars = Object.values(ratings).reduce(
      (acc, num) => (acc += num)
    );

    const totalStarsReceived = Object.entries(ratings).reduce((acc, entry) => {
      acc += Number(entry[0]) * Number(entry[1]);
      return acc;
    }, 0);
    const pctInteger = (totalStarsReceived / totalPossibleStars) * 5;
    const outOfFive = 5 / pctInteger;
    setFillPct(`${outOfFive}%`);
    console.log(outOfFive);
  }, []);

  return (
    <div className='ratings'>
      {fillPct && (
        <>
          <div className='empty-stars'></div>
          <div className='full-stars' style={{ width: fillPct }}></div>
        </>
      )}
    </div>

    // <div>
    //   {reviewPointArr.map((points, i) => (
    //     <Star key={i} starPoints={points} />
    //   ))}
    // </div>
  );
};

StarReviews.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
};

export default StarReviews;
