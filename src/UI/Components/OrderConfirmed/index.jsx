import React from "react";
import { RUPPEE_IMG } from "Assets/images";

const OrderConfirmed = (props) => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="invoice p-5">
              <h5>Your order Confirmed!</h5>{" "}
              <span class="font-weight-bold d-block mt-4">
                {(props.address && props.address["fullname"]) || ""}
              </span>{" "}
              <span>
                You order has been confirmed and will be shipped in next two
                days!
              </span>
              <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div class="py-2">
                          {" "}
                          <span class="d-block text-muted">
                            Order Date
                          </span>{" "}
                          <span>{new Date().toLocaleDateString("en-US")}</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          {" "}
                          <span class="d-block text-muted">Order No</span>{" "}
                          <span>MT12332345</span>{" "}
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          {" "}
                          <span class="d-block text-muted">Payment</span>{" "}
                          <span>
                            <img
                              src="https://img.icons8.com/color/48/000000/mastercard.png"
                              width="20"
                            />
                          </span>{" "}
                        </div>
                      </td>
                      <td>
                        <div class="py-2">
                          {" "}
                          <span class="d-block text-muted">
                            Shiping Address
                          </span>{" "}
                          <span>
                            {(props.address && props.address.fullname && (
                              <span>{`${props.address.house}, ${props.address.area}, ${props.address.city}, ${props.address.state}, ${props.address.pincode}`}</span>
                            )) ||
                              null}
                          </span>{" "}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="product border-bottom table-responsive">
                <table class="table table-borderless">
                  <tbody>
                    {/* <tr> */}
                    {props.cart &&
                      props.cart.length &&
                      props.cart.map((item) => (
                        <tr>
                          <td width="20%">
                            {" "}
                            <img src={item.image} width="90" />{" "}
                          </td>
                          <td width="60%">
                            {" "}
                            <span class="font-weight-bold">{item.title}</span>
                            <div class="product-qty">
                              {" "}
                              <span class="d-block">
                                Quantity:{item.quantity}
                              </span>{" "}
                            </div>
                          </td>
                          <td width="20%">
                            <div class="text-right">
                              {" "}
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyItems: "center",
                                }}
                              >
                                <img
                                  src={RUPPEE_IMG}
                                  style={{ height: "10px", width: "10px" }}
                                />{" "}
                                <span class="font-weight-bold">
                                  {(item.price * item.quantity).toFixed(2)}
                                </span>{" "}
                              </div>
                              {/* <span class="font-weight-bold">
                                Rs.{(item.price * item.quantity).toFixed(2)}
                              </span>{" "} */}
                            </div>
                          </td>
                        </tr>
                      ))}
                    {/* </tr> */}
                  </tbody>
                </table>
              </div>
              <div class="row d-flex justify-content-end">
                <div class="col-md-5">
                  <table class="table table-borderless">
                    <tbody class="totals">
                      <tr>
                        <td>
                          <div class="text-left">
                            {" "}
                            <span class="text-muted">Subtotal</span>{" "}
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyItems: "center",
                              }}
                            >
                              <img
                                src={RUPPEE_IMG}
                                style={{ height: "15px", width: "15px" }}
                              />{" "}
                              <span class="font-weight-bold">
                                {props.total.toFixed(2)}
                              </span>{" "}
                            </div>
                            {/* <span>Rs.{props.total}</span>{" "} */}
                          </div>
                        </td>
                      </tr>
                      <tr class="border-top border-bottom">
                        <td>
                          <div class="text-left">
                            {" "}
                            <span class="font-weight-bold">Subtotal</span>{" "}
                          </div>
                        </td>
                        <td>
                          <div class="text-right">
                            {" "}
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyItems: "center",
                              }}
                            >
                              <img
                                src={RUPPEE_IMG}
                                style={{ height: "15px", width: "15px" }}
                              />{" "}
                              <span class="font-weight-bold">
                                {props.total.toFixed(2)}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p class="font-weight-bold mb-0">Thanks for shopping with us!</p>{" "}
            </div>
            <div class="d-flex justify-content-between footer p-3">
              {" "}
              <span>{new Date().toLocaleDateString("en-US")}</span>{" "}
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default OrderConfirmed;
