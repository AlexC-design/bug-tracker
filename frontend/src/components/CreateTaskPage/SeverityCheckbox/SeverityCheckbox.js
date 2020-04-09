import React from "react";
import { intToSeverity } from "../../../utils/severities";

import "./css/severity-checkbox.css";

export const SeverityCheckbox = ({ severity, selectSeverity, selected }) => {
  return (
    <div
      onClick={
        selectSeverity !== "disabled"
          ? () => selectSeverity(severity)
          : () => {}
      }
      className={`severity-checkbox severity-checkbox${
        selected ? "--selected" : ""
      } ${selectSeverity === "disabled" ? "nopointer" : ""}`}
    >
      <div
        className={`severity-checkbox__checkbox severity-checkbox__checkbox--${intToSeverity[severity]}`}
      ></div>
      <div className="severity-checkbox__label">{intToSeverity[severity]}</div>
    </div>
  );
};
