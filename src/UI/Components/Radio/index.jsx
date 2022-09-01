import React from "react";

const Radio = (props) => {
  return (
    <input
      type="radio"
      value={props.value}
      onChange={props.onChange}
      style={props.style}
      name={props.name}
      checked={props.value}
    />
  );
};

export default Radio;
