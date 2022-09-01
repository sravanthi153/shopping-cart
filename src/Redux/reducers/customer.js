import {
  ADD_CUSTOMER_ADDRESS,
  ADD_TO_CART,
  CUSTOMER_LOGIN,
  CUSTOMER_LOGOUT,
  ORDER_CONFIRM,
  PLACE_ORDER,
  REMOVE_FROM_CART,
} from "Redux/actionTypes/customer";

const initialState = {
  cart: [],
  customer: {},
  cart_items_ids: [],
  totalPrice: 0,
  addresses: [],
  selectedAddress: {},
};

export const customerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CUSTOMER_LOGIN: {
      return {
        ...state,
        customer: payload,
      };
    }
    case CUSTOMER_LOGOUT: {
      return {
        ...state,
        customer: {},
      };
    }
    case ADD_TO_CART: {
      //checking the quantity of product in the cart if not there add quantity value 1 else increase by 1
      let product,
        cart,
        cart_items_ids = [...state.cart_items_ids];

      if (!cart_items_ids.includes(payload.id)) {
        cart_items_ids.push(payload.id);
        product = { ...payload, quantity: 1 };
        cart = [...state.cart, product];
      } else {
        cart = state.cart.map((e) =>
          e.id !== payload.id ? e : { ...e, quantity: e.quantity + 1 }
        );
      }
      let totalPrice = [...cart].reduce((a, c) => {
        return a + c.price * c.quantity;
      }, 0);
      return {
        ...state,
        cart,
        cart_items_ids,
        totalPrice,
      };
    }
    case REMOVE_FROM_CART: {
      let cart,
        cart_items_ids = [...state.cart_items_ids];
      //checking product id === payload means  find the elemnet
      if (payload && payload == "delete all") {
        cart = [];
        cart_items_ids = [];
      } else if (payload && !payload.delete) {
        const product = state.cart.find((p) => p.id == payload);
        //check the found element quantity if quantity is >1 means map cart items and decrease the quantity by 1
        if (product && product.quantity > 1) {
          cart = state.cart.map((p) => {
            if (p.id == payload) {
              return {
                ...p,
                quantity: p.quantity - 1,
              };
            } else return p;
          });
        } else {
          cart = state.cart.filter((p) => p.id !== payload);
          cart_items_ids = state.cart_items_ids.filter(
            (pid) => pid !== payload
          );
        }
      } else {
        cart = state.cart.filter((e) => e.id !== payload.id);
        cart_items_ids = state.cart_items_ids.filter(
          (e) => e.id !== payload.id
        );
      }
      let totalPrice = cart.reduce((a, c) => {
        return a + c.price * c.quantity;
      }, 0);
      return {
        ...state,
        cart,
        cart_items_ids,
        totalPrice,
      };
    }
    case ADD_CUSTOMER_ADDRESS: {
      return {
        ...state,
        addresses: [...state.addresses, payload],
      };
    }
    case PLACE_ORDER: {
      return {
        ...state,
        selectedAddress: payload,
      };
    }
    case ORDER_CONFIRM: {
      return {
        ...state,
        selectedAddress: {},
        cart: [],
        cart_items_ids: [],
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};
