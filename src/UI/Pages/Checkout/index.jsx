import { validateEmptyField, validateNumber } from "helpers/utils";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addCustomerAddress, placeOrder } from "Redux/actions/customer";
import { ORDER_SUCCESS } from "Routes/path";
import Button from "UI/Components/Button";
import Layout from "UI/Components/Layout";
import Modal from "UI/Components/Modal";
import Radio from "UI/Components/Radio";

const Checkout = () => {
  const [state, setState] = useState({
    modalShow: false,
    fullnamae: "",
    mobile: "",
    pincode: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    selected: {},
    selectedAddress: null,
    submitted: false,
  });
  const { addresses } = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const onChangeHandler = (name, value) => {
    if (name === "mobile" || name === "pincode") {
      const valid = validateNumber(value);
      if (valid)
        setState({
          ...state,
          [name]: value,
        });
    } else
      setState({
        ...state,
        [name]: value,
      });
  };

  const handleRadio = (index, addr) => {
    setState({
      ...state,
      selectedAddress: addr,
      selected: {
        [index]: state.selected[index] ? false : true,
      },
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setState({
      ...state,
      submitted: true,
    });
    const data = {
      ...state,
    };
    if (
      !validateEmptyField(state.fullname) &&
      !validateEmptyField(state.mobile) &&
      !validateEmptyField(state.pincode) &&
      !validateEmptyField(state.house) &&
      !validateEmptyField(state.area) &&
      !validateEmptyField(state.city) &&
      !validateEmptyField(state.state)
    ) {
      delete data.modalShow;
      delete data.selected;
      dispatch(addCustomerAddress(data));
      Object.keys(state).forEach((key) => (state[key] = ""));
      setState({
        ...state,
        modalShow: false,
        submitted: false,
      });
    }
  };

  return (
    <Layout>
      <h3>Select a delivery address</h3>
      <Card>
        <Card.Body>
          {(addresses &&
            addresses.length &&
            addresses.map((addr, index) => (
              <div
                style={{
                  display: "flex",
                  // justifyItems: "center",
                  // alignItems: "center",
                }}
              >
                <Radio
                  onChange={() => handleRadio(index, addr)}
                  name={"selectedAddress"}
                  value={state.selected && state.selected.key}
                  data={addr}
                  style={{ marginRight: "15px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>
                    {addr.fullname},
                    <span
                      style={{ fontWeight: "normal" }}
                    >{`${addr.house}, ${addr.area}, ${addr.city}, ${addr.state}, ${addr.pincode}`}</span>
                  </p>
                </div>
              </div>
            ))) ||
            null}
          <a
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => setState({ ...state, modalShow: true })}
          >
            +Add a new address
          </a>
        </Card.Body>
        {(addresses && addresses.length && (
          <Button
            disabled={!state.selectedAddress}
            variant={"primary"}
            onClick={() => {
              dispatch(placeOrder(state.selectedAddress));
              navigateTo(ORDER_SUCCESS);
            }}
          >
            Place Order
          </Button>
        )) ||
          null}
      </Card>
      <Modal
        title={"Enter a new delivery address"}
        show={state.modalShow}
        onHide={() => setState({ ...state, modalShow: false })}
        type={"submit"}
        label={"Submit"}
        variant={"primary"}
      >
        <h3>Add a new address</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Full name<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name={"fullname"}
              value={state.fullname}
              type="text"
              placeholder="Enter name"
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
            {state.submitted && validateEmptyField(state.fullname) && (
              <span style={{ color: "red" }}>please enter name</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Mobile number<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name={"mobile"}
              value={state.mobile}
              type="text"
              placeholder="Enter Mobile Number"
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
            {state.submitted && validateEmptyField(state.mobile) && (
              <span style={{ color: "red" }}>
                please enter valid mobile number
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Pincode<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name={"pincode"}
              value={state.pincode}
              maxLength="6"
              type="text"
              placeholder="6 digits [0-9] PIN Code"
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
            {state.submitted && validateEmptyField(state.pincode) && (
              <span style={{ color: "red" }}>
                please enter 6 digitd valid pincode
              </span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Flat, House no., Building, Company, Apartment
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name={"house"}
              value={state.house}
              type="text"
              placeholder=""
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
            {state.submitted && validateEmptyField(state.house) && (
              <span style={{ color: "red" }}>please enter required field</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              Area, Street, Sector, Village
              <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              name={"area"}
              value={state.area}
              type="area"
              placeholder=""
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
            {state.submitted && validateEmptyField(state.area) && (
              <span style={{ color: "red" }}>please enter required field</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              name={"landmark"}
              value={state.landmark}
              type="text"
              placeholder=""
              onChange={({ target }) =>
                onChangeHandler(target.name, target.value)
              }
            />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Group
              className="mb-6"
              style={{ width: "45%" }}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Town/City<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                name={"city"}
                value={state.city}
                type="text"
                placeholder=""
                onChange={({ target }) =>
                  onChangeHandler(target.name, target.value)
                }
              />
              {state.submitted && validateEmptyField(state.city) && (
                <span style={{ color: "red" }}>
                  please enter required field
                </span>
              )}
            </Form.Group>
            <Form.Group
              className="mb-6"
              style={{ width: "45%" }}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                State<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                name={"state"}
                value={state.state}
                type="text"
                placeholder=""
                onChange={({ target }) =>
                  onChangeHandler(target.name, target.value)
                }
              />
              {state.submitted && validateEmptyField(state.state) && (
                <span style={{ color: "red" }}>
                  please enter required field
                </span>
              )}
            </Form.Group>
          </div>
          <Button
            style={{
              marginTop: "15px",
              display: "flex",
              alignSelf: "flex-end",
              float: "right",
              width: "150px",
              textAlign: "center",
              padding: "auto",
            }}
            type={"submit"}
            variant={"primary"}
          >
            <span style={{ margin: "auto" }}>Submit</span>
            {/* {"     "}Submit */}
          </Button>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Checkout;
