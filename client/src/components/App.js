
import ProductDetails from './ProductDetails'
import NotFound from './NotFound'
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <Router >
      <Container>
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
    </Container>
    </Router>
  );
};

export default App;
