import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductContext from '../context/product/productContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // const [currentStyleIdx, setCurrentStyleIdx] = useState(0);

  const { productId } = useParams();
  const productContext = useContext(ProductContext);

  const {
    setProductId,
    getAllProductInfo,
    productInfo,
    styleInfo,
    images,
    currentStyleIdx,
    setCurrentStyleIdx,
  } = productContext;

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
              <ProductPurchasePanel
                productInfo={productInfo}
                styles={styleInfo}
                currentStyleIdx={currentStyleIdx}
                setCurrentStyleIdx={setCurrentStyleIdx}
              />
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
