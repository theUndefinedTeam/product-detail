import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Container>
        <Switch>
          <Route path='/:productId' children={<ProductDetails />} />
          <Route children={<NotFound />} />
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;
