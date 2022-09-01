import React from "react";
import BCard from "react-bootstrap/Card";
import Ratings from "UI/Components/Ratings";
import { RUPPEE_IMG } from "Assets/images";

const Card = (props) => {
  const { image, price, title, description, rating } = props.data;
  return (
    <BCard
      style={{ ...props.style, cursor: "pointer" }}
      onClick={props.onClick}
      // className="card text-center"
    >
      <BCard.Header className="text-center">
        <BCard.Img
          src={image}
          style={{
            height: "180px",
            width: "140px",
            textAlign: "center",
            margin: "auto",
          }}
        ></BCard.Img>
      </BCard.Header>
      <BCard.Body>
        <BCard.Subtitle>
          <Ratings style={{ width: "80%" }} totalReview={rating}>
            {" "}
            Reviews
          </Ratings>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
              fontSize: "20px",
            }}
          >
            <span>Price: </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <img
                src={RUPPEE_IMG}
                style={{ height: "19px", width: "17px", marginLeft: "10px" }}
              />{" "}
              <span style={{ fontSize: "20px" }}>{price}</span>
            </div>
          </div>
        </BCard.Subtitle>
        <BCard.Title>{title}</BCard.Title>
      </BCard.Body>
    </BCard>
  );
};

export default Card;
