import React from "react";
import WebcamVideo from "./WebcamVideo";
import "./modal.css";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="modal">
        <div className="man" onClick={() => setIsOpen(false)} />
        <div>
          <div className="close">
            <button className="center" onClick={() => setIsOpen(false)}>
              {" "}
              close
            </button>
            <WebcamVideo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
