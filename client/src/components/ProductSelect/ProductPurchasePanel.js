import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import StarReviews from './StarReviews';
import StyleSelector from './StyleSelector';
import Dropdowns from './Dropdowns';
const ProductPurchasePanel = ({
  reviewMeta,
  styles,
  currentStyleIdx,
  productId,
}) => {
  return (
    <Card className='ml-3' style={{ backgroundColor: 'pink' }}>
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
      <StyleSelector />
      <Dropdowns
        style={styles.results[currentStyleIdx]}
        currentStyleIdx={currentStyleIdx}
        productId={productId}
      />
    </Card>
  );
};

ProductPurchasePanel.propTypes = {
  reviewMeta: PropTypes.object.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  styles: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProductPurchasePanel;
