import React from "react";
import { TaskCard } from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";

export const TaskColumn = () => {
  return (
    <div className="task-column">
      <div className="task-column__title">High Priority</div>
      <SimpleBarReact>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </SimpleBarReact>
    </div>
  );
};
