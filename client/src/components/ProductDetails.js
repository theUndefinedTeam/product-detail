import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import imageUrls from '../urlData/urls';
import ProductContext from '../context/product/productContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const { productId } = useParams();
  const productContext = useContext(ProductContext);
  const {
    setProductId,
    getAllProductInfo,
    productInfo,
    styleInfo,
    images,
  } = productContext;

  useEffect(() => {
    getAllProductInfo(productId);
    setProductId(productId);
  }, []);

  return (
    <Container>
      {productInfo && styleInfo && styleInfo.results.length && (
        <Container>
          <Row className='mt-2'>
            <Col lg={8}>
              <CarouselContainer
                currentStyleIdx={currentStyleIdx}
                styles={styleInfo.results}
                imageUrls={imageUrls[currentStyleIdx]}
                setCurrentStyleIdx={setCurrentStyleIdx}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
              />
            </Col>
            <Col>
              <ProductPurchasePanel
                productInfo={productInfo}
                styles={styleInfo}
                images={images}
                currentStyleIdx={currentStyleIdx}
                setCurrentStyleIdx={setCurrentStyleIdx}
                setCurrentImage={setCurrentImage}
                productId={productId}
                setCurrentImage={setCurrentImage}
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
