import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import "../modal/modal.css";

const Modal = forwardRef(({ services }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="testModal">
      <h1>TESSSSSSSSSST</h1>
      <ul>
        {services.map((service) => {
          return <li>{service}</li>;
        })}
      </ul>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
