import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { HOME_IMG, CART_IMG, PROFILE_IMG } from "Assets/images";
import {
  CART,
  CHECKOUT,
  LOGIN,
  ORDER_SUCCESS,
  PRODUCT_LIST,
} from "Routes/path";
import { customerLogout, orderSuccess } from "Redux/actions/customer";
import { Dropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  console.log("🚀 ~ file: index.jsx ~ line 13 ~ Header ~ location", location);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { customer, cart } = useSelector((state) => state.customer);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <img
        src={PROFILE_IMG}
        className="login-img"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setShow(true);
        }}
      />
      {children}
    </a>
  ));

  return (
    <div className="ct-header">
      <img
        src={HOME_IMG}
        style={{ padding: "20px", cursor: "pointer" }}
        onClick={() => {
          if (location.pathname === ORDER_SUCCESS) dispatch(orderSuccess());
          navigateTo(PRODUCT_LIST);
        }}
      />
      <h3 style={{ textAlign: "center", padding: "20px" }}>My Shopping Mart</h3>
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", position: "relative" }}>
            <img
              src={CART_IMG}
              style={{ padding: "20px", cursor: "pointer", height: "70px" }}
              onClick={() => navigateTo(CART)}
            />
            <p style={{}} className="count">
              {" "}
              {cart.length}
            </p>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-custom-components"
            ></Dropdown.Toggle>

            <Dropdown.Menu show={show}>
              <Dropdown.Item
                eventKey="1"
                onClick={() => {
                  if (customer.email) {
                    dispatch(customerLogout());
                    navigateTo(PRODUCT_LIST);
                  } else navigateTo(LOGIN);
                  setShow(false);
                }}
              >
                {customer.email ? "Logout" : "Login"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>
    </div>
  );
};

export default Header;
