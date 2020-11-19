import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import StarReviews from './StarReviews';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
const ProductPurchasePanel = ({
  reviewMeta,
  styles,
  currentStyleIdx,
  setCurrentStyleIdx,
  productId,
  images,
  setCurrentImage,
}) => {
  return (
    <Card className='ml-3 h-100' style={{ backgroundColor: 'pink' }}>
      <Row>
        {/* <StarReviews reviewMeta={reviewMeta} /> */}
        <a
          href='#!'
          style={{
            color: 'grey',
            textDecoration: 'underline',
            fontSize: '12px',
          }}>
          Read all Reviews
        </a>
      </Row>
      <p>Category</p>
      <h2>Expanded Product Name</h2>
      <p>$9999</p>
      <StyleSelector
        currentStyleIdx={currentStyleIdx}
        setCurrentStyleIdx={setCurrentStyleIdx}
        images={images}
        setCurrentImage={setCurrentImage}
        styles={styles}
      />
      <AddToCart
        style={styles.results[currentStyleIdx]}
        productId={productId}
      />
    </Card>
  );
};

ProductPurchasePanel.propTypes = {
  setCurrentImage: PropTypes.func.isRequired,
  reviewMeta: PropTypes.object.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  setCurrentStyleIdx: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};

export default ProductPurchasePanel;
