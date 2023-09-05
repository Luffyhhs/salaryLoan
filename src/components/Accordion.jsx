import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordion = (props) => {
  const handleClick = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div className="accordium" onClick={handleClick}>
      <FaAngleDown />
    </div>
  );
};

export default Accordion;
