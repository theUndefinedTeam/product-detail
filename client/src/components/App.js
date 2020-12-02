import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import ProductState from '../context/product/productState';
import Navbar from './Navbar';
const App = () => (
  <ProductState>
    <HashRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path='/:productId' children={<ProductDetails />} />
          <Route children={<NotFound />} />
        </Switch>
      </Container>
    </HashRouter>
  </ProductState>
);

export default App;
