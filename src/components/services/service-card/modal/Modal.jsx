import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import "../modal/modal.css";
import { RxCross2 } from "react-icons/rx";

const Modal = forwardRef(({ title, services }, ref) => {
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
      <form method="dialog">
        <button className="cross-icon">
          <RxCross2 />
        </button>
      </form>
      <h2>{title}</h2>
      <ul>
        {services.map((service) => {
          return <li>{service}</li>;
        })}
      </ul>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
