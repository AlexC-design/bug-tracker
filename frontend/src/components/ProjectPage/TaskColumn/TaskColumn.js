import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";

export const TaskColumn = ({ priority, tasks }) => {
  return (
    <div className="task-column">
      <div className="task-column__title">{priority}</div>
      {tasks.length ? (
        <SimpleBarReact>
          {tasks.map(task => {
            if (!task.taskCompleted) {
              return <TaskCard taskDetails={task} key={task._id} />;
            }
          })}
          <div className="task-column__completed">
            <div className="task-column__completed__title">Completed</div>
            {tasks.map(task => {
              if (task.taskCompleted) {
                return <TaskCard taskDetails={task} key={task._id} />;
              }
            })}
          </div>
        </SimpleBarReact>
      ) : (
        <div></div>
      )}
    </div>
  );
};
