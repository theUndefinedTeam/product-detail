import {
  SET_PRODUCT_ID,
  PRODUCT_ERROR,
  GET_PRODUCT_INFO,
  SET_CURRENT_IMAGE,
  SET_CURRENT_STYLE_IDX,
  ADD_TO_CART,
} from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: payload,
      };
    case GET_PRODUCT_INFO:
      document.title = payload[0].data.name;
      return {
        ...state,
        productInfo: payload[0].data,
        styleInfo: payload[1].data,
        reviewMeta: payload[2].data,
        images: state.images.slice(0, payload[1].data.results.length),
      };
    case SET_CURRENT_IMAGE:
      return {
        ...state,
        currentImage: payload,
      };
    case SET_CURRENT_STYLE_IDX:
      return {
        ...state,
        currentStyleIdx: payload,
      };
    case PRODUCT_ERROR:
      console.error('PRODUCT ERROR', payload);
    case ADD_TO_CART:
      payload.name = state.productInfo.name;
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, payload],
      };
    default:
      return state;
  }
};
