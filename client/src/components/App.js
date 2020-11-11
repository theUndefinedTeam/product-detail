import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Gallery/Carousel';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';

const App = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState([]);
  const [reviewMeta, setReviewMeta] = useState([]);

  const getAllData = async () => {
    try {
      const returnedData = await axios.all([
        axios.get('http://52.26.193.201:3000/products/10'),
        axios.get('http://52.26.193.201:3000/products/10/styles'),
        axios.get('http://52.26.193.201:3000/reviews/10/meta'),
      ]);

      await setProductInfo(returnedData[0].data);
      await setStyleInfo(returnedData[1].data);
      await setReviewMeta(returnedData[2].data);
    } catch (err) {
      console.error('Error at get all product data', err.message);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Carousel />
        </Col>
        <Col>
          <ProductPurchasePanel />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
