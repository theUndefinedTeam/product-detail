import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

const Dropdowns = ({ style, currentStyleIdx, productId }) => {
  console.log({ style });
  const [currentSize, setCurrentSize] = useState(null);
  const [currentStyleQty, setCurrentStyleQty] = useState(0);
  const [selectedQty, setSelectedQty] = useState(0);
  const [cart, setCart] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    currentSize !== null && setShowMessage(false);
  }, [currentSize]);

  const handleAddClick = () => {
    if (currentSize === null) {
      setShowMessage(true);
    }
    setCart({
      ...cart,
      item: {
        product_id: Number(productId),
        style_id: style.style_id,
        sku: currentSize,
        qty: selectedQty,
      },
    });
    console.log({ cart });
  };

  return (
    <>
      <Form>
        {showMessage && <Alert variant='info'>Select a size!</Alert>}
        <Row>
          <Col>
            <Form.Control
              as='select'
              size='sm'
              onChange={(e) => {
                setCurrentSize(e.target.value);
                setCurrentStyleQty(style.skus[e.target.value]);
                setSelectedQty(1);
              }}>
              <option>Select Size</option>
              {Object.keys(style.skus).map((size, i) =>
                style.skus[size] ? (
                  <option key={i} value={size} name={size}>
                    {size}
                  </option>
                ) : (
                  <option key={i} value={size}>
                    OUT OF STOCK
                  </option>
                )
              )}
            </Form.Control>
          </Col>
          <Col>
            <Form.Control
              as='select'
              size='sm'
              onChange={(e) => setSelectedQty(Number(e.target.value))}>
              {currentStyleQty ? (
                [...new Array(currentStyleQty)].map(
                  (qty, i) =>
                    i < 15 && (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    )
                )
              ) : (
                <option> - </option>
              )}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='secondary' onClick={() => handleAddClick()}>
              Add to Cart{' '}
              <i className='fas fa-plus ml-1' style={iconStyles}></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
const iconStyles = {
  fontSize: '12px',
};

Dropdowns.propTypes = {
  style: PropTypes.object.isRequired,
  currentStyleIdx: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
};

export default Dropdowns;
