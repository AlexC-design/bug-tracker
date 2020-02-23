import React from "react";
import { TaskCard } from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";

export const TaskColumn = ({ priority }) => {
  return (
    <div className="task-column">
      <div className="task-column__title">{priority}</div>
      <SimpleBarReact>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <div className="task-column__completed">
          <div className="task-column__completed__title">Completed</div>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </SimpleBarReact>
    </div>
  );
};
