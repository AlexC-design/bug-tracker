import React, { useState, useEffect } from "react";
import dropdownArrow from "../../../assets/svg/dropdown-arrow.svg";

import "./css/environment-dropdown.css";

export const EnvironmentDropdown = ({ selectEnvironment, environment }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDropdown = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  const options = ["Chrome", "Firefox", "Safari", "Opera", "Edge", "IE", "All"];

  return (
    <>
      <label>Environment</label>
      <div onClick={() => toggleDropdown()} className="environment-dropdown">
        <div className="environment-dropdown__top">
          <div className="environment-dropdown__top__selected">
            {environment}
          </div>
          <img
            src={dropdownArrow}
            className={`environment-dropdown__top__arrow environment-dropdown__top__arrow--${
              expanded ? "reversed" : ""
            }`}
          />
        </div>
        <div
          className={`environment-dropdown__options environment-dropdown__options--${
            expanded ? "expanded" : "contracted"
          }`}
        >
          {options.map(option => (
            <div
              onClick={() => {
                selectEnvironment(option);
                toggleDropdown();
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
