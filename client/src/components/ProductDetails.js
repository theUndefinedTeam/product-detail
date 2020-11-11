import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Gallery/Carousel';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState([]);
  const [reviewMeta, setReviewMeta] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);

  const getAllData = async () => {
    try {
      const returnedData = await axios.all([
        axios.get(`http://52.26.193.201:3000/products/${id}`),
        axios.get(`http://52.26.193.201:3000/products/${id}/styles`),
        axios.get(`http://52.26.193.201:3000/reviews/${id}/meta`),
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
          <Carousel styles={styleInfo.results} />
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

export default ProductDetails;
