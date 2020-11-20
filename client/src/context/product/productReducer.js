import {
  SET_PRODUCT_ID,
  PRODUCT_ERROR,
  GET_PRODUCT_INFO,
  SET_CURRENT_IMAGE,
  SET_CURRENT_STYLE_IDX,
} from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_PRODUCT_ID:
      // console.log('setting product id', { payload });
      return {
        ...state,
        productId: payload,
      };
    case GET_PRODUCT_INFO:
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
    default:
      return state;
  }
};
