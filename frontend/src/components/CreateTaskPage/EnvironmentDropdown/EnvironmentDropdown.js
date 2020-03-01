import React, { useState, useEffect } from "react";
import dropdownArrow from "../../../assets/svg/dropdown-arrow.svg";

import "./css/environment-dropdown.css";

export const EnvironmentDropdown = () => {
  const [selected, setSelected] = useState("Select");
  const [expanded, setExpanded] = useState(false);

  const options = ["Chrome", "Firefox", "Safari", "Opera", "Edge", "IE", "All"];

  return (
    <>
      <label>Environment</label>
      <div className="environment-dropdown">
        <div className="environment-dropdown__top">
          <div className="environment-dropdown__top__selected">{selected}</div>
          <img
            src={dropdownArrow}
            className="environment-dropdown__top__arrow"
          />
        </div>
        <div className="environment-dropdown__options">
          {options.map(option => (
            <div>{option}</div>
          ))}
        </div>
      </div>
    </>
  );
};
