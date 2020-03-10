import React from "react";

import "./css/severity-checkbox.css";

export const SeverityCheckbox = ({ severity, selectSeverity, selected }) => {
  return (
    <div
      onClick={() => selectSeverity(severity)}
      className={`severity-checkbox severity-checkbox${
        selected ? "--selected" : ""
      }`}
    >
      <div
        className={`severity-checkbox__checkbox severity-checkbox__checkbox--${severity}`}
      ></div>
      <div className="severity-checkbox__label">{severity}</div>
    </div>
  );
};
