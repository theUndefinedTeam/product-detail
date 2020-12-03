import React, { useState, useContext } from 'react';
import { Navbar, Button, FormControl, Form, Nav } from 'react-bootstrap';
import ProductContext from '../context/product/productContext';
const NavBar = () => {
  const [location, setLocation] = useState('');
  const productContext = useContext(ProductContext);
  const { setProductId } = productContext;

  const searchProduct = (e) => {
    e.preventDefault;
    if (typeof Number(location) !== NaN) {
      setProductId(location);
      window.location.href = `${window.location.origin}/#/${location}`;
    }
  };
  return (
    <Navbar bg='info' variant='dark'>
      <Navbar.Brand href='#home'>
        Cannot read property "store" of undefined
      </Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search'
          className='mr-2'
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button
          variant='outline-light'
          onClick={(e) => searchProduct(e)}
          className='mr-4'>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
