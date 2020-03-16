import React from "react";

import "./css/task-card.css";

export const TaskCard = ({ taskDetails }) => {
  const formatSummary = ({ taskSummary }) => {
    const desc = taskSummary.substring(0, 150);
    const format = taskSummary.length > 150 ? "..." : "";

    return desc + format;
  };

  return (
    <div className="task-card">
      <div className="task-card__details">
        <div className="task-card__details__name">{taskDetails.taskName}</div>
        <div
          className={`task-card__details__severity task-card__details__severity--${taskDetails.taskSeverity}`}
        />
      </div>
      <div className="task-card__summary">
        {formatSummary(taskDetails)}
      </div>
    </div>
  );
};
