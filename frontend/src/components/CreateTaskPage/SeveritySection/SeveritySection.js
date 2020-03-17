import React from "react";
import { SeverityCheckbox } from "../SeverityCheckbox/SeverityCheckbox";

export const SeveritySection = ({ selectSeverity, taskDetails }) => {
  return (
    <div className="task-creation__left__top__severity">
      <div className="task-creation__left__top__severity__label">Severity</div>
      <div className="task-creation__left__top__severity__checkboxes">
        <SeverityCheckbox
          severity="High"
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === "High" ? true : false}
        />
        <SeverityCheckbox
          severity="Medium"
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === "Medium" ? true : false}
        />
        <SeverityCheckbox
          severity="Low"
          selectSeverity={selectSeverity}
          selected={taskDetails.taskSeverity === "Low" ? true : false}
        />
      </div>
    </div>
  );
};
