import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCarousel.css";

const SlickCarousel = (props) => {
  return (
    <div>
      <Slider
        // style={{ height: "15px" }}
        slidesToShow={props.slides}
        slidesToScroll={props.slides}
      >
        {props.children}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
