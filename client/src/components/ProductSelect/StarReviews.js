import React, { useState, useEffect, useContext } from 'react';
import ProductContext from '../../context/product/productContext';

const StarReviews = () => {
  const [fillPct, setFillPct] = useState(0);

  const productContext = useContext(ProductContext);

  const {
    reviewMeta,
    reviewMeta: { ratings },
  } = productContext;

  useEffect(() => {
    if (!Object.values(ratings).length) return;
    const totalPossibleStars =
      Object.values(ratings).reduce((acc, num) => (acc += num)) * 5;

    const totalStarsReceived = Object.entries(ratings).reduce((acc, entry) => {
      acc += Number(entry[0]) * Number(entry[1]);
      return acc;
    }, 0);
    const pctInteger = parseInt(
      (totalStarsReceived / totalPossibleStars) * 100,
      10
    );
    setFillPct(`${pctInteger}%`);
  }, [ratings, reviewMeta]);
  return (
    <div className='d-inline-flex ml-3'>
      <span className='ratings'>
        <div className='empty-stars' />
        <div className='full-stars' style={{ width: fillPct }} />
      </span>
      <a
        href='/#/1'
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
  );
};

export default StarReviews;
