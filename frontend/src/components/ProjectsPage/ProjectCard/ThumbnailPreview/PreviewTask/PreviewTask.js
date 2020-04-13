import React from "react";

import "./css/preview-task.css";

export const PreviewTask = ({ task }) => {
  return (
    <div
      className={`preview-task preview-task${
        task.taskCompleted ? "--completed" : ""
      }`}
    >
      <div
        className={`preview-task__severity preview-task__severity--${task.taskSeverity}`}
      ></div>
    </div>
  );
};
