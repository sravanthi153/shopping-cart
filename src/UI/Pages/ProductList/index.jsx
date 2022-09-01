import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { getAllProductsThunk } from "Redux/thunks/product";
import { PRODUCT_DETAILS } from "Routes/path";
import Card from "UI/Components/Card";
import Layout from "UI/Components/Layout";
import Loader from "UI/Components/Loader";
import "./ProductList.css";

const ProductList = (props) => {
  const navigate = useNavigate();

  useEffect(async () => {
    await props.getAllProducts();
  }, []);

  return (
    <Layout>
      <div style={{ minHeight: "calc(100vh - 130px)" }}>
        <h1 className="ct-products-list-title"> Products</h1>
        <div className="ct-products-list">
          {(props.products &&
            props.products.length > 0 &&
            props.products.map((product) => {
              return (
                <Card
                  style={{ margin: "15px", width: "22em" }}
                  data={product}
                  onClick={() => navigate(`products/${product.id}`)}
                />
              );
            })) || (
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
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProductsThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
