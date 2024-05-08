import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../service-card/serviceCard.css";
import Modal from "./modal/Modal";

const ServiceCard = ({ icon, title, services }) => {
  const dialog = useRef();

  function handleModal() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} title={title} services={services} />
      <div className="service__card">
        {icon}
        <h3>{title}</h3>
        <div className="view-more" onClick={handleModal}>
          <span>
            View More
          </span>
          <FaLongArrowAltRight className="view-arrow" />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
