import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { customerLogin, customersOrders } from "Redux/actions/customer";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Layout from "UI/Components/Layout";
import "./Login.css";

const Login = (props) => {
  let navigateTo = useNavigate();
  const customer = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(customerLogin(state));
    navigateTo(-1);
  };
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <Layout>
      <div className="Login">
        <Form className="login-form" onSubmit={handlerSubmit}>
          <Card>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => handleInput(e)}
                />
                {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleInput(e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                  name="rememberMe"
                  onChange={(e) => handleInput(e)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-submit">
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
