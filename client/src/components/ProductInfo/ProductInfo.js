import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';
import { Row, Col, Card } from 'react-bootstrap';

const ProductInfo = () => {
  const productContext = useContext(ProductContext);
  const {
    productInfo: { slogan, description, features },
  } = productContext;

  return (
    <Row
      style={{ minHeight: '100px', marginLeft: '60px' }}
      className='p-4 mt-3'>
      <Col md={8}>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </Col>
      <>
        {features.length ? (
          <Col>
            {features.map((item, i) => (
              <div key={i} className=''>
                <span className='mr-2'>✔️</span>
                <span className='text-nowrap'>
                  <span className='font-weight-bold'>{item.feature}</span>{' '}
                  {item.value !== 'null' && `: ${item.value}`}
                </span>{' '}
              </div>
            ))}
          </Col>
        ) : null}
      </>
    </Row>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
