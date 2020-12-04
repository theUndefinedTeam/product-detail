import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Button, FormControl, Form, Nav } from 'react-bootstrap';
import ProductContext from '../context/product/productContext';
import ShoppingCart from './ShoppingCart';
import axios from 'axios';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const productContext = useContext(ProductContext);
  const { setProductId } = productContext;

  const searchProduct = (e) => {
    e.preventDefault;

    const newProduct = products.find((item) => item.name.includes(searchTerm));
    console.log(newProduct.id);
    // if (typeof Number(location) !== NaN) {
    //   setProductId(location);
    //   window.location.href = `${window.location.origin}/#/${location}`;
    // }
    if (newProduct.id) {
      setProductId(newProduct.id);
      console.log(newProduct.id);
      window.location.href = `${window.location.origin}/#/${newProduct.id}`;
      setSearchTerm('');
    }
  };

  useEffect(() => {
    axios
      .get('http://52.26.193.201:3000/products/list?count=1000')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err.message, 'TRYING TO GET'));
  }, []);

  return (
    <Navbar bg='info' variant='dark'>
      <Navbar.Brand href='#home'>
        Cannot read property "storeName" of undefined
      </Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search'
          className='mr-2'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant='outline-light'
          onClick={(e) => {
            e.preventDefault;
            searchProduct(e);
          }}
          className='mr-4'>
          Search
        </Button>
        <ShoppingCart />
      </Form>
    </Navbar>
  );
};

export default NavBar;
