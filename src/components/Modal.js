import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const elRef = React.useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  React.useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(
  <div style={{
      display: "flex",
    flexDirection: "column",
    justifyContent: "center",
alignItems: "center",
}}>{children}</div>, elRef.current);
};

export { Modal }