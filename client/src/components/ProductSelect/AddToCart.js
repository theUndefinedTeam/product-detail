import React, { useState, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductContext from '../../context/product/productContext';

const AddToCart = ({ style }) => {
  const [currentSize, setCurrentSize] = useState(null);
  const [currentStyleQty, setCurrentStyleQty] = useState(1);
  const [selectedQty, setSelectedQty] = useState(0);
  const [cart, setCart] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const selectSizeRef = useRef(null);
  const { productId } = useParams();
  const { addToCart } = useContext(ProductContext);

  useEffect(() => {
    currentSize !== null && setShowMessage(false);
  }, [currentSize]);

  const handleAddClick = () => {
    if (currentSize === null) {
      setShowMessage(true);
    } else {
      axios
        .post(' http://52.26.193.201:3000/cart/', {
          product_id: Number(productId),
          user_session: 300,
        })
        .then((res) => res)
        .catch((err) =>
          console.error('ERROR @ handleAddClick AddToCart.js', err.message)
        );

      addToCart({
        price: style.sale_price > 0 ? style.sale_price : style.original_price,
        product_id: Number(productId),
        style_id: style.style_id,
        sku: currentSize,
        qty: selectedQty,
        styleName: style.name,
      });

      selectSizeRef.current.selected = true;
      setCurrentSize(null);
    }
  };

  return (
    <>
      <Form>
        {showMessage && (
          <Alert variant='warning' className='w-50 ml-2'>
            Select a size!
          </Alert>
        )}
        <Row className='w-75 ml-2 mb-1'>
          <Form.Control
            as='select'
            className='mb-2'
            onChange={(e) => {
              setCurrentSize(e.target.value);
              setCurrentStyleQty(style.skus[e.target.value]);
              setSelectedQty(1);
            }}
            style={{ maxWidth: '70%' }}>
            <option ref={selectSizeRef}>Select Size</option>
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
          <Form.Control
            as='select'
            className='w-25 ml-1'
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
        </Row>
        <Row className='ml-2 mt-1'>
          <Button variant='info' onClick={() => handleAddClick()}>
            Add to Cart <FontAwesomeIcon icon={faPlus} className='ml-2' />
          </Button>
          <Button variant='outline-info' size='sm' className='ml-1'>
            <FontAwesomeIcon icon={faStar} />
          </Button>
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
};

export default AddToCart;
