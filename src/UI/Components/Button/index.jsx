import React from "react";
import BButton from "react-bootstrap/Button";

const Button = (props) => {
  return (
    <BButton
      style={{ ...props.style }}
      className={props.className}
      variant={props.variant}
      as={props.as}
      type={props.type}
      value={props.value}
      size={props.size}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </BButton>
  );
};

export default Button;
