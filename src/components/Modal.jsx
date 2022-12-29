import React from "react";
import WebcamVideo from "./WebcamVideo";
import "./modal.css";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div>
        <div>
          <button className="center" onClick={() => setIsOpen(false)}>
            {" "}
            close
          </button>
          <WebcamVideo />
        </div>
      </div>
    </>
  );
};

export default Modal;
