import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import StarReviews from './StarReviews';
import StyleSelector from './StyleSelector';
import Dropdowns from './Dropdowns';
const ProductPurchasePanel = ({ reviewMeta }) => {
  return (
    <Card className='ml-3' style={{ backgroundColor: 'pink' }}>
      <Row>
        <StarReviews reviewMeta={reviewMeta} />
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
      <Dropdowns />
    </Card>
  );
};

ProductPurchasePanel.propTypes = {};

export default ProductPurchasePanel;
