import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselContainer from './Gallery/CarouselContainer';
import ProductPurchasePanel from './ProductSelect/ProductPurchasePanel';
import ProductInfo from './ProductInfo/ProductInfo';
import ThumbnailGallery from './Gallery/ThumbnailGallery';
import imageUrls from '../urlData/urls';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
  const [productInfo, setProductInfo] = useState([]);
  const [styleInfo, setStyleInfo] = useState(null);
  const [reviewMeta, setReviewMeta] = useState(null);
  const [currentStyleIdx, setCurrentStyleIdx] = useState(0);
  const { productId } = useParams();
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const getAllData = async () => {
    try {
      const returnedData = await axios.all([
        axios.get(`http://52.26.193.201:3000/products/${productId}`),
        axios.get(`http://52.26.193.201:3000/products/${productId}/styles`),
        axios.get(`http://52.26.193.201:3000/reviews/${productId}/meta`),
      ]);
      await setProductInfo(returnedData[0].data);
      await setStyleInfo(returnedData[1].data);
      await setReviewMeta(returnedData[2].data);
      await setImages(imageUrls.slice(0, returnedData[1].data.results.length));
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
              {reviewMeta && (
                <ProductPurchasePanel
                  reviewMeta={reviewMeta}
                  styles={styleInfo}
                  images={images}
                  currentStyleIdx={currentStyleIdx}
                  setCurrentStyleIdx={setCurrentStyleIdx}
                  setCurrentImage={setCurrentImage}
                  productId={productId}
                  setCurrentImage={setCurrentImage}
                />
              )}
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
