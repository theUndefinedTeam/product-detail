import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './Star.css';
// import getReviewPoints from '../../utils/getReviewPoints';

const StarReviews = ({ reviewMeta }) => {
  const { ratings } = reviewMeta;
  const [reviewPointArr, setReviewPointArr] = useState([]);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    // setReviewPointArr(getReviewPoints(ratings));
    console.log({ ratings, reviewMeta });
    if (!Object.values(ratings).length) return;
    const totalPossibleStars =
      Object.values(ratings).reduce((acc, num) => (acc += num)) * 5;

    const totalStarsReceived = Object.entries(ratings).reduce((acc, entry) => {
      acc += Number(entry[0]) * Number(entry[1]);
      return acc;
    }, 0);
    const pctInteger = parseInt(
      (totalStarsReceived / totalPossibleStars) * 100
    );
    setFillPct(`${pctInteger}%`);
    console.log({ fillPct });
  }, [ratings, reviewMeta]);
  console.log({ reviewPointArr });
  return (
    <div className='d-inline-flex ml-4'>
      <span className='ratings'>
        <div className='empty-stars'></div>
        {console.log(fillPct)}
        <div className='full-stars' style={{ width: fillPct }}></div>
      </span>
      <a
        href='#!'
        style={{
          // color: 'grey',
          textDecoration: 'underline',
          fontSize: '12px',
          verticalAlign: 'middle',
        }}
        className='text-secondary mt-2 ml-1'>
        Read all Reviews
      </a>
    </div>
    // <div>
    //   {reviewPointArr.map((points, i) => (
    //     <Star key={i} starPoints={points} />
    //   ))}
    // </div>
  );
};

// const starsStyle = { width: fillPct };
StarReviews.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
};

export default StarReviews;
