import React from 'react';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import ProductState from '../context/product/productState';
import { Container } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <ProductState>
      <HashRouter>
        <Container>
          <Switch>
            <Route path='/:productId' children={<ProductDetails />} />
            <Route children={<NotFound />} />
          </Switch>
        </Container>
      </HashRouter>
    </ProductState>
  );
};

export default App;
