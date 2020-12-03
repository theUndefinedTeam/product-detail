import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductContext from '../context/product/productContext';

const ShoppingCart = (props) => {
  const [show, setShow] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const productContext = useContext(ProductContext);
  const { shoppingCart } = productContext;

  useEffect(() => {
    const total =
      shoppingCart.length &&
      shoppingCart.reduce((acc, item) => {
        return (acc += Number(item.price) * Number(item.qty));
      }, 0);
    setCartTotal(total);
    console.log(total);
  }, [shoppingCart]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='outline-light'
        className='m-1'
        onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {shoppingCart.length ? (
              shoppingCart.map((item, i) => {
                const { price, name, styleName, qty, sku } = item;
                const total = Number(price) * Number(qty);
                return (
                  <ListGroupItem key={i}>
                    <h6>
                      {name} - {styleName}
                    </h6>
                    <p>
                      Size: {sku} Qty: {qty} Total: {total}
                    </p>
                  </ListGroupItem>
                );
              })
            ) : (
              <h5>...nada</h5>
            )}
          </ListGroup>
          <h5 className='pull-right'> Your total: ${cartTotal}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={handleClose}
            disabled={shoppingCart.length ? false : true}>
            Check Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
