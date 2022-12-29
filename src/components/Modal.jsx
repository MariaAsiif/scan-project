import React from "react";
import WebcamVideo from "./WebcamVideo";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div>
        <div>
          <button onClick={() => setIsOpen(false)}> mangrio</button>
          <WebcamVideo />
        </div>
      </div>
    </>
  );
};

export default Modal;
