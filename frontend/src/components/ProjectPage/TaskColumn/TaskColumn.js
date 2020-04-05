import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard/TaskCard";
import SimpleBarReact from "simplebar-react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";
import { changeColumn } from "../../../store/state/selectedProject/index";

import "simplebar/src/simplebar.css";
import "./css/task-column.css";
import { connect } from "react-redux";

const TaskColumn = ({ priority, tasks, changeColumn }) => {
  const [noCompleted, setNoCompleted] = useState(true);

  const checkCompleted = tasks => {
    let found = false;

    tasks.map(task => {
      if (task.taskCompleted) {
        found = true;
      }
    });

    return found;
  };

  useEffect(() => {
    if (checkCompleted(tasks) !== noCompleted) {
      setNoCompleted(checkCompleted(tasks));
    }
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      if (item.oldPriority.split(" ")[0] !== priority.split(" ")[0]) {
        changeColumn(
          item.projectId,
          item.taskId,
          item.oldPriority.split(" ")[0],
          priority.split(" ")[0]
        );
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <div
      className={`task-column task-column${isOver ? "--over" : ""}`}
      ref={drop}
    >
      <div className="task-column__title">{priority}</div>
      {tasks.length ? (
        <SimpleBarReact>
          {tasks.map(task => {
            if (!task.taskCompleted) {
              return <TaskCard taskDetails={task} key={task._id} />;
            } else {
              return null;
            }
          })}
          {noCompleted && (
            <div className="task-column__completed">
              <div className="task-column__completed__title">Completed</div>
              {tasks.map(task => {
                if (task.taskCompleted) {
                  return <TaskCard taskDetails={task} key={task._id} />;
                } else {
                  return null;
                }
              })}
            </div>
          )}
          <div className="task-column__spacing" />
        </SimpleBarReact>
      ) : (
        <div className="task-column__empty"></div>
      )}
    </div>
  );
};

export default connect(null, { changeColumn })(TaskColumn);
