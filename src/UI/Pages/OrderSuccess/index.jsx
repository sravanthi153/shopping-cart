import React from "react";
import { useSelector } from "react-redux";
import Layout from "UI/Components/Layout";
import OrderConfirmed from "UI/Components/OrderConfirmed";
import Button from "UI/Components/Button";
import { useNavigate } from "react-router";
import { PRODUCT_LIST } from "Routes/path";
import { useDispatch } from "react-redux";
import { orderSuccess } from "Redux/actions/customer";

const OrderSuccess = (props) => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { addresses, cart, selectedAddress, totalPrice } = useSelector(
    (state) => state.customer
  );
  return (
    <div>
      <Layout>
        <div style={{ marginBottom: "84px" }}>
          <OrderConfirmed
            cart={cart}
            address={selectedAddress}
            total={totalPrice}
          >
            <Button
              style={{
                width: "165px",
                float: "right",
                transform: "translate(-190px, 13px)",
              }}
              onClick={() => {
                dispatch(orderSuccess());
                navigateTo(PRODUCT_LIST);
              }}
            >
              Continue Shopping
            </Button>
          </OrderConfirmed>
        </div>
      </Layout>
    </div>
  );
};

export default OrderSuccess;
