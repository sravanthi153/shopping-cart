import {
  ADD_CUSTOMER_ADDRESS,
  ADD_TO_CART,
  CUSTOMER_LOGIN,
  CUSTOMER_LOGOUT,
  CUSTOMER_ORDERS,
  ORDER_CONFIRM,
  PLACE_ORDER,
  REMOVE_FROM_CART,
} from "Redux/actionTypes/customer";

export const customerLogin = (payload) => {
  return {
    type: CUSTOMER_LOGIN,
    payload,
  };
};

export const customerLogout = () => {
  return {
    type: CUSTOMER_LOGOUT,
  };
};

export const customersOrders = () => {
  return {
    type: CUSTOMER_ORDERS,
  };
};

export const addProductToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeProductFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const addCustomerAddress = (payload) => {
  return {
    type: ADD_CUSTOMER_ADDRESS,
    payload,
  };
};

export const placeOrder = (payload) => {
  return {
    type: PLACE_ORDER,
    payload,
  };
};

export const orderSuccess = () => {
  return {
    type: ORDER_CONFIRM,
  };
};
