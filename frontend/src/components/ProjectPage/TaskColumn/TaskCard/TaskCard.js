import React from "react";

import "./css/task-card.css";

export const TaskCard = ({ taskDetails }) => {
  const formatDescription = ({ taskDescription }) => {
    const desc = taskDescription.substring(0, 150);
    const format = taskDescription.length > 150 ? "..." : "";

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
      <div className="task-card__description">
        {formatDescription(taskDetails)}
      </div>
    </div>
  );
};
