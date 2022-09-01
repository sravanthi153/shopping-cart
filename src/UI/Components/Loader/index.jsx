import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div class="conta_iner">
      <div class="main_div">
        <div class="row">
          <div class="col-md-2 loader5">
            <div class="loader-wrapper d-flex justify-content-center align-items-center">
              <div class="loader">
                <div class="ball-scale-ripple-multiple">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
