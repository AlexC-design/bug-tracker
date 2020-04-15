import React, { useState, useEffect } from "react";
import { PreviewTask } from "../PreviewTask/PreviewTask";
import { sortTasksBySeverity } from "../../../../ProjectPage/TaskColumn/sortTasksBySeverity";

import "./css/preview-column.css";

export const PreviewColumn = ({ tasks, columnNo }) => {
  const [newMargin, setNewMargin] = useState(0);

  //initial sliding
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      newMargin === 0 ? setNewMargin(90 * (tasks.length - 3)) : setNewMargin(0);
    }, Math.floor(Math.random() * 4000));

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //interval sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      newMargin === 0 ? setNewMargin(90 * (tasks.length - 3)) : setNewMargin(0);
    }, Math.floor(Math.random() * 1000 * columnNo) + 4000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const sortedTasks = sortTasksBySeverity(tasks)[0].concat(
    sortTasksBySeverity(tasks)[1]
  );

  return (
    <div className="preview-column" style={{ marginTop: `-${newMargin}px` }}>
      {sortedTasks.map(task => (
        <PreviewTask task={task} key={task._id} />
      ))}
    </div>
  );
};
