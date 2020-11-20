import React, { useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';
import imageUrls from '../../urlData/urls';
import { PRODUCT_ERROR, GET_PRODUCT_INFO, SET_PRODUCT_ID } from '../types';
import axios from 'axios';

const ProductState = (props) => {
  const initialState = {
    productInfo: null,
    styleInfo: null,
    reviewMeta: null,
    // currentStyleIdx: 0,
    images: imageUrls,
    // currentImage: 0,
    productId: 1,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getAllProductInfo = async (productId) => {
    try {
      const returnedData = await axios.all([
        axios.get(`http://52.26.193.201:3000/products/${state.productId}`),
        axios.get(
          `http://52.26.193.201:3000/products/${state.productId}/styles`
        ),
        axios.get(`http://52.26.193.201:3000/reviews/${state.productId}/meta`),
      ]);

      dispatch({
        type: GET_PRODUCT_INFO,
        payload: returnedData,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err,
      });
    }
  };

  const setProductId = (id) => {
    dispatch({
      type: SET_PRODUCT_ID,
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        productInfo: state.productInfo,
        styleInfo: state.styleInfo,
        reviewMeta: state.reviewMeta,
        // currentStyleIdx: state.currentStyleIdx,
        // images: state.images,
        // currentImage: state.currentImage,
        productId: state.productId,
        setProductId,
        getAllProductInfo,
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
