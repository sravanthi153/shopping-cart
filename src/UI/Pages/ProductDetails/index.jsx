import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { CART, CHECKOUT, LOGIN } from "Routes/path";
import { addProductToCart } from "Redux/actions/customer";
import { getProductThunk } from "Redux/thunks/product";
import Layout from "UI/Components/Layout";
// import Checkout from 'UI/Pages/Checkout';
import Loader from "UI/Components/Loader";
import { RUPPEE_IMG } from "Assets/images";
import Ratings from "UI/Components/Ratings";
import SlickCarousel from "UI/Components/SlickCarousel";
import Card from "UI/Components/Card";
import ToggleButton from "UI/Components/ToggleButton";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [checked, setChecked] = useState(false);
  const { product, products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk(params.product_id));
  }, [params.product_id]);
  const renderSlides = () => {
    return products
      .filter((p) => p.id !== product.id && p.category === product.category)
      .map((p) => {
        return (
          <div style={{ marginLeft: "20px" }}>
            <Card
              style={{ height: "390px" }}
              data={p}
              onClick={() => navigate(`/products/${p.id}`)}
            />
          </div>
        );
      });
  };
  return (
    <Layout>
      <div
        style={
          !product || !product.id
            ? {
                minHeight: "calc(100vh - 130px)",
                position: "relative",
                margin: "20px",
                display: "flex",
                flexWrap: "wrap",
                flexGrow: 1,
              }
            : {
                minHeight: "calc(100vh - 130px)",
              }
        }
      >
        {(product && product.id && (
          <>
            <div
              style={{ display: "flex", alignItems: "center", margin: "20px" }}
            >
              <img
                src={product.image}
                style={{
                  width: "22em",
                  height: "30vh",
                  borderRight: "2px solid gray",
                  padding: "0px 30px",
                }}
              />
              <div style={{ padding: "10px 30px" }}>
                <h5 className="ct-product-title" style={{}}>
                  {product.title}
                </h5>
                <Ratings
                  style={{ width: "30%", fontSize: "20px" }}
                  totalReview={product.rating}
                >
                  {" ratings"}
                </Ratings>
                <div
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
                  <span style={{ fontSize: "25px" }}>{product.price}</span>
                </div>
                <p className="item product-category">
                  <span>Category: {"\n"}</span> {product.category}
                </p>
                <p className=" item product-description">
                  <span>Description: {"\n"}</span> {product.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ToggleButton
                    checked={checked}
                    onChange={(value) => {
                      setChecked(value);
                      dispatch(addProductToCart(product));
                    }}
                  >
                    Add to Cart
                  </ToggleButton>
                  {/* <button
                    className="btn-orange"
                    onClick={() => {
                      setButtonClick()
                      dispatch(addProductToCart(product));
                    }}
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h3>Items you may like</h3>
              <SlickCarousel slides={3}>{renderSlides()}</SlickCarousel>
            </div>
          </>
        )) || (
          <h1
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              margin: "auto",
            }}
          >
            <Loader />
          </h1>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
