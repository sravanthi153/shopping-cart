import {
  LOGIN,
  CHECKOUT,
  CART,
  PRODUCT_DETAILS,
  PRODUCT_LIST,
  ORDER_SUCCESS,
} from "Routes/path";
import {
  CartPage,
  CheckoutPage,
  LoginPage,
  ProductDetailsPage,
  ProductsListPage,
  OrderSuccessPage,
} from "UI/Pages";

export const ProtectedRoutes = [
  {
    path: CHECKOUT,
    component: <CheckoutPage />,
  },
  {
    path: ORDER_SUCCESS,
    component: <OrderSuccessPage />,
  },
];
export const PublicRoutes = [
  {
    path: LOGIN,
    component: <LoginPage />,
  },
  {
    path: PRODUCT_LIST,
    component: <ProductsListPage />,
  },
  {
    path: PRODUCT_DETAILS,
    component: <ProductDetailsPage />,
  },
  {
    path: CART,
    component: <CartPage />,
  },
];
