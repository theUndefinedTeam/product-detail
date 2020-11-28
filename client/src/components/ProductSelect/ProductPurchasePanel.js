import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
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
    <Card className='ml-4 h-100 p-1 w-100' style={{ borderStyle: 'none' }}>
      <div className='h-100 d-flex flex-column'>
        <StarReviews />

        <div className='info ml-3 mt-4'>
          <p>
            <span style={{ fontWeight: '700', fontSize: '18px' }}>
              Category {' > '}
            </span>
            {productInfo.category}
          </p>
          <h3>{productInfo.name}</h3>
          {/* Below line renders price and styles the text based on whether there is a sale */}
          <div className='d-flex w-75 justify-content-between'>
            <span
              style={{
                fontSize: '20px',
                fontWeight: '700',
              }}>
              {isSale && <span>${salePrice}</span>}
              <span>
                {isSale ? (
                  <strike className='ml-2 text-danger'>${originalPrice}</strike>
                ) : (
                  `  $${originalPrice}`
                )}{' '}
              </span>{' '}
            </span>
            <SocialButtons />
          </div>
        </div>
      </div>
      <Col>
        <StyleSelector
          currentStyleIdx={currentStyleIdx}
          setCurrentStyleIdx={setCurrentStyleIdx}
          styles={styles}
        />
        <AddToCart style={styles.results[currentStyleIdx]} />
      </Col>
    </Card>
  );
};

const noSaleStyle = {
  color: 'black',
};

ProductPurchasePanel.propTypes = {};

export default ProductPurchasePanel;
