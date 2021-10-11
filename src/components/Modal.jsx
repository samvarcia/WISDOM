import React from "react";
import "../assets/styles/Modal.css";
function Modal({ children }) {
  return <div className="ModalBackground">{children}</div>;
}

export default Modal;
