import React from "react";

import "./css/task-button.css";

export const TaskButton = ({ action }) => {
  return (
    <button className={`task-button task-button--${action}`}>{action}</button>
  );
};
