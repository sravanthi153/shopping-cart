import React from "react";
import BModal from "react-bootstrap/Modal";
import Button from "UI/Components/Button";

const Modal = (props) => {
  return (
    <BModal
      {...props}
      size="lg"
      aria-labelledby="contained-BModal-title-vcenter"
      centered
    >
      <BModal.Header closeButton>
        <BModal.Title id="contained-BModal-title-vcenter">
          {props.title}
        </BModal.Title>
      </BModal.Header>
      <BModal.Body>{props.children}</BModal.Body>
      {/* <BModal.Footer>
        <Button
          //   onClick={props.onHide}
          type={props.type}
          variant={props.variant}
          value={props.label}
        >
          {props.label}
        </Button>
      </BModal.Footer> */}
    </BModal>
  );
};

export default Modal;
