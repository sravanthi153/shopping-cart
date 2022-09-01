import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_ALL_PRODUCTS_PENDING,
  GET_PRODUCT_PENDING,
} from "Redux/actionTypes/products";

export const getAllProductsPending = () => {
  return {
    type: GET_ALL_PRODUCTS_PENDING,
  };
};

export const getAllProductsSuccess = (payload) => {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getAllProductsError = (payload) => {
  return {
    type: GET_ALL_PRODUCTS_ERROR,
    payload,
  };
};

export const getProductPending = () => {
  return {
    type: GET_PRODUCT_PENDING,
  };
};

export const getProductSuccess = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};

export const getProductError = (payload) => {
  return {
    type: GET_PRODUCT_ERROR,
    payload,
  };
};
