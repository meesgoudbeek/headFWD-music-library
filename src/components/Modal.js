import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ children, show, close }) {
  if (!show) return null;

  return (
    <div className="Modal">
      <div className="ModalContent">
        <CloseIcon onClick={close} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
