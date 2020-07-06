import React from "react";
import { FaHamburger } from "react-icons/fa";

const ToggleButton = (props) => {


  return (
    <div>
      <button className="hamburger-toggle" onClick={props.click}>
        <div className="hamburger-icon">
          <FaHamburger />
        </div>
      </button>
    </div>
  );
};

export default ToggleButton;