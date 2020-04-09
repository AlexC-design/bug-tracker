import React from "react";
import { SeverityCheckbox } from "../SeverityCheckbox/SeverityCheckbox";

export const SeveritySection = ({ selectSeverity, taskDetails }) => {
  return (
    <div className="task-creation__left__top__severity">
      <div className="task-creation__left__top__severity__label">Severity</div>
      <div className="task-creation__left__top__severity__checkboxes">
        <SeverityCheckbox
          severity={1}
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === 1 ? true : false}
        />
        <SeverityCheckbox
          severity={2}
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === 2 ? true : false}
        />
        <SeverityCheckbox
          severity={3}
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === 3 ? true : false}
        />
      </div>
    </div>
  );
};
