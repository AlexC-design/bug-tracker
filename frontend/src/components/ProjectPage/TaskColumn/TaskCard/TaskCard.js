import React from "react";

import "./css/task-card.css";

export const TaskCard = ({ taskDetails }) => {
  return (
    <div className="task-card">
      <div className="task-card__details">
        <div className="task-card__details__name">Task Name</div>
        <div className="task-card__details__id">#TaskId</div>
        <div className="task-card__details__severity" />
      </div>
      <div className="task-card__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
        lacus vitae semper venenatis. Aenean euismod et erat vel pellentesque.
        Proin elementum, nisi ac venenatis ultrices.
      </div>
    </div>
  );
};
