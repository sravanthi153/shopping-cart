import React from "react";
import BToggleButton from "react-bootstrap/ToggleButton";

const ToggleButton = (props) => {
  return (
    <BToggleButton
      className="mb-2"
      id="toggle-check"
      type="checkbox"
      variant={"outline-primary"}
      checked={props.checked}
      value="1"
      onClick={props.onClick}
      onChange={(e) => props.onChange(e.currentTarget.checked)}
    >
      {props.children}
    </BToggleButton>
  );
};

export default ToggleButton;
