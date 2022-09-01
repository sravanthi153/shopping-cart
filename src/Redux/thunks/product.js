import {
  getAllProductsError,
  getAllProductsPending,
  getAllProductsSuccess,
  getProductError,
  getProductPending,
  getProductSuccess,
} from "Redux/actions/products";

const { getAllProducts, getProduct } = require("apis/products");

export const getAllProductsThunk = () => {
  return async function (dispatch, getState) {
    dispatch(getAllProductsPending());
    let { data, status } = await getAllProducts();
    if (data && status === 200) {
      dispatch(getAllProductsSuccess(data));
    } else {
      dispatch(getAllProductsError(data));
    }
  };
};

export const getProductThunk = (pid) => {
  return async function (dispatch, getState) {
    dispatch(getProductPending());
    let { data, status } = await getProduct(pid);
    if (data && status === 200) {
      dispatch(getProductSuccess(data));
    } else {
      dispatch(getProductError(data));
    }
  };
};
