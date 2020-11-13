import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import ThumbnailGallery from './Gallery/ThumbnailGallery';

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  //PUUUUUNK
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState(null);
  const [reviewMeta, setReviewMeta] = useState([]);
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [thumbnailIdx, setThumbnailIdx] = useState(0);

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
      {styleInfo && styleInfo.results.length && (
        <Container>
          <Row>
            <Col lg={8}>
              <CarouselContainer
                currentStyleIdx={currentStyleIdx}
                styles={styleInfo.results}
              />
              <ThumbnailGallery
                styles={styleInfo.results}
                currentStyleIdx={currentStyleIdx}
                setCurrentStyleIdx={setCurrentStyleIdx}
              />
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
      )}
    </Container>
  );
};

export default ProductDetails;
