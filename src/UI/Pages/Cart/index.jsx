import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Layout from "UI/Components/Layout";
import { CHECKOUT, LOGIN, PRODUCT_LIST } from "Routes/path";
import { DELETE_IMG, RUPPEE_IMG } from "Assets/images";
import {
  addProductToCart,
  removeProductFromCart,
} from "Redux/actions/customer";
import "./Cart.css";
import EmptyCart from "UI/Components/EmptyCart";
import Button from "UI/Components/Button";
import Ratings from "UI/Components/Ratings";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, cart, customer, cart_items_ids } = useSelector(
    (state) => state.customer
  );
  const naviagteTo = useNavigate();
  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 130px)" }}>
        {(cart.length > 0 && (
          <div className="ct-cart">
            {cart && cart.length && (
              <Card className="item-card" /* style={{ width: "70%" }} */>
                <Card.Body>
                  {cart.map((item, index) => (
                    <div
                      className="item-body"
                      style={{
                        borderBottom: "1px solid gray",
                        // index + 1 !== cart.length ? "1px solid gray" : "",
                        marginBottom: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <img src={item.image} className="product-img" />
                      <div classNam="product-details">
                        <h5 className="product-title">{item.title}</h5>
                        <div
                          className="price"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyItems: "center",
                          }}
                        >
                          <img
                            src={RUPPEE_IMG}
                            style={{ height: "20px", width: "20px" }}
                          />{" "}
                          <span style={{ fontSize: "25px" }}>
                            {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="category">{item.category}</p>
                        <p className="rating">
                          <Ratings
                            style={{ width: "70%" }}
                            totalReview={item.rating}
                          >
                            {" "}
                            Reviews
                          </Ratings>
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyItems: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="ct-items-status">
                            {item.quantity == 1 ? (
                              <img
                                className="delete-img"
                                src={DELETE_IMG}
                                onClick={() =>
                                  dispatch(removeProductFromCart(item.id))
                                }
                              />
                            ) : (
                              <p
                                className="status decrement-quantity"
                                onClick={() =>
                                  dispatch(removeProductFromCart(item.id))
                                }
                              >
                                -
                              </p>
                            )}
                            <p className=" status quantity">{item.quantity}</p>
                            <p
                              className=" status increment-quantity"
                              onClick={() => dispatch(addProductToCart(item))}
                            >
                              +
                            </p>
                          </div>
                          <Button
                            className="btn-delete"
                            onClick={() =>
                              dispatch(
                                removeProductFromCart({
                                  delete: true,
                                  id: item.id,
                                })
                              )
                            }
                            variant={"outline-dark"}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "15px",
                  }}
                >
                  <h3
                    style={{
                      textAlignLast: "end",
                      paddingRight: "40px",
                    }}
                  >
                    Subtotal({cart.length} items): Rs{totalPrice.toFixed(2)}
                  </h3>
                  <div
                    className="btns-ct"
                    style={{
                      alignSelf: "flex-end",
                    }}
                  >
                    <Button
                      onClick={() =>
                        customer && customer.email
                          ? naviagteTo(CHECKOUT)
                          : naviagteTo(LOGIN)
                      }
                      style={{ marginRight: "10px" }}
                      variant="primary"
                      className={"proceed_to_by"}
                    >
                      Proceed to Buy ({cart.length > 0 && cart.length} item )
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="proceed_to_buy"
                      onClick={() => naviagteTo(PRODUCT_LIST)}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )) || <EmptyCart onClick={() => naviagteTo(PRODUCT_LIST)} />}
      </div>
    </Layout>
  );
};

export default Cart;
