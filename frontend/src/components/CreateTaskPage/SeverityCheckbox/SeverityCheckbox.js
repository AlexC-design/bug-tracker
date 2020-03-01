import React from "react";

import "./css/severity-checkbox.css";

export const SeverityCheckbox = ({ severity }) => {
  return (
    <div className="severity-checkbox">
      <div className="severity-checkbox__checkbox"></div>
      <div className="severity-checkbox__label">{severity}</div>
    </div>
  );
};
