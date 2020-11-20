import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import StarReviews from './StarReviews';

const ProductPurchasePanel = ({
  styles,
  currentStyleIdx,
  setCurrentStyleIdx,
  productInfo,
}) => {
  const {
    sale_price: salePrice,
    original_price: originalPrice,
  } = styles.results[currentStyleIdx];

  const isSale = Number(salePrice) > 0;

  return (
    <Card className='ml-3 h-100 p-1 ml-1'>
      <Row>
        <StarReviews />
      </Row>
      <div className='info ml-3'>
        <p>{productInfo.category}</p>
        <h2>{productInfo.name}</h2>
        {/* Below line renders price and styles the text based on whether there is a sale */}
        <p>
          {isSale && <span>${salePrice}</span>}
          <span>
            {isSale ? (
              <strike className='ml-2 text-danger'>${originalPrice}</strike>
            ) : (
              `  $${originalPrice}`
            )}
          </span>
        </p>
      </div>
      <StyleSelector
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
        styles={styles}
      />
      <AddToCart style={styles.results[currentStyleIdx]} />
    </Card>
  );
};

const noSaleStyle = {
  color: 'black',
};

ProductPurchasePanel.propTypes = {
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  productInfo: PropTypes.object.isRequired,
};

export default ProductPurchasePanel;
