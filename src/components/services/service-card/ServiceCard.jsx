import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Modal from "./modal/Modal";

const ServiceCard = ({ icon, title, services }) => {
  const dialog = useRef();

  function handleModal() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} services={services} />
      <div>
        {icon}
        <h3>{title}</h3>
        <span onClick={handleModal}>
          View More <FaLongArrowAltRight />
        </span>
      </div>
    </>
  );
};

export default ServiceCard;
