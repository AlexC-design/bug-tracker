import React from "react";

export const SeverityCheckbox = ({ severity }) => {
  return (
    <div className="severity-checkbox">
      <div className="severity-checkbox__checkbox"></div>
      <div className="severity-checkbox__label">{severity}</div>
    </div>
  );
};
