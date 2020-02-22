import React from "react";
import { TaskCard } from "./TaskCard/TaskCard";

import "./css/task-column.css";

export const TaskColumn = () => {
  return (
    <div className="task-column">
      <TaskCard />
    </div>
  );
};
