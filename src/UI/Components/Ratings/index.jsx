import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Ratings.css";

const Ratings = ({ totalReview, style, children }) => {
  const options = {
    size: 25,
    edit: false,
    isHalf: true,
    value: totalReview.rate,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "55%",
        alignItems: "center",
        justifyItems: "center",
        ...style,
      }}
    >
      <ReactStars {...options} />
      {totalReview.count}
      {children}
    </div>
  );
};

export default Ratings;
