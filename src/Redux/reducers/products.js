import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_PENDING,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
} from "Redux/actionTypes/products";

const initialState = {
  products: [],
  product: {},
  error: "",
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS_PENDING: {
      return {
        ...state,
        products: [],
        error: "",
      };
    }
    case GET_ALL_PRODUCTS_SUCCESS: {
      return { ...state, products: payload };
    }
    case GET_ALL_PRODUCTS_ERROR: {
      return { ...state, error: payload };
    }
    case GET_PRODUCT_PENDING: {
      return {
        ...state,
        product: {},
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return { ...state, product: payload };
    }
    case GET_PRODUCT_ERROR: {
      return { ...state, error: payload };
    }
    default:
      return state;
  }
};
