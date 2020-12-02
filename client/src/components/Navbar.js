import React, { useState } from 'react';
import { Navbar, Button, FormControl, Form, Nav } from 'react-bootstrap';

const NavBar = () => {
  const [location, setLocation] = useState('');

  const searchProduct = () => {
    if (Number(location) !== NaN) {
      window.location.href = `${window.location.origin}/#/${location}`;
    }
  };
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='#home'>undefined</Navbar.Brand>
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
          onClick={searchProduct}
          className='mr-4'>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
