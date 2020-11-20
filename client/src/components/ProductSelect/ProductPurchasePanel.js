import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import StarReviews from './StarReviews';
import ProductContext from '../../context/product/productContext';
import SocialButtons from './SocialButtons';

const ProductPurchasePanel = ({}) => {
  const productContext = useContext(ProductContext);
  const {
    styleInfo: styles,
    currentStyleIdx,
    setCurrentStyleIdx,
    productInfo,
  } = productContext;

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
        <h4>{productInfo.name}</h4>
        {/* Below line renders price and styles the text based on whether there is a sale */}
        <div className='d-flex justify-content-between'>
          {isSale && <span>${salePrice}</span>}
          <span>
            {isSale ? (
              <strike className='ml-2 text-danger'>${originalPrice}</strike>
            ) : (
              `  $${originalPrice}`
            )}{' '}
          </span>{' '}
          <SocialButtons />
        </div>
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

ProductPurchasePanel.propTypes = {};

export default ProductPurchasePanel;
