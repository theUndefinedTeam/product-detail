import React, { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductContext from '../context/product/productContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const productContext = useContext(ProductContext);
  const { setProductId, getAllProductInfo, productInfo } = productContext;

  useEffect(() => {
    getAllProductInfo(productId);
    setProductId(productId);
  }, []);

  return (
    <Container>
      {productInfo && (
        <Container>
          <Row className='mt-2'>
            <Col lg={8}>
              <CarouselContainer />
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
