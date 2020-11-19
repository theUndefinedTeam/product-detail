import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddToCart = ({ style, productId }) => {
  const selectSizeRef = useRef(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [currentStyleQty, setCurrentStyleQty] = useState(1);
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
    axios
      .post(' http://52.26.193.201:3000/cart/', {
        product_id: Number(productId),
        user_session: 300,
      })
      .then((res) => console.log(res.data))
      .catch((err) =>
        console.error('ERROR @ handleAddClick AddToCart.js', err.message)
      );

    setCart({
      ...cart,
      item: {
        product_id: Number(productId),
        style_id: style.style_id,
        sku: currentSize,
        qty: selectedQty,
      },
    });
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
              ref={selectSizeRef}
              onChange={(e) => {
                setCurrentSize(e.target.value);
                setCurrentStyleQty(style.skus[e.target.value]);
                setSelectedQty(1);
              }}
              className='w-50'>
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
              className='w-50'
              value={selectedQty}
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
            <Button
              variant='secondary'
              onClick={() => handleAddClick()}
              size='sm'>
              Add to Cart{' '}
              <i className='fas fa-plus ml-1' style={iconStyles}></i>
            </Button>
            <Button variant='secondary' size='sm' className='pull-right ml-4'>
              <i className='fas fa-star' style={iconStyles}></i>
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

AddToCart.propTypes = {
  style: PropTypes.object.isRequired,
  productId: PropTypes.string.isRequired,
};

export default AddToCart;
