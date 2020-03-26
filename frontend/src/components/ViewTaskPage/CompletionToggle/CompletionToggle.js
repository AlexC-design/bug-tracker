import React, { useState } from "react";

import "./css/completion-toggle.css";

export const CompletionToggle = () => {
  const [taskState, setTaskState] = useState(false);

  return (
    <div className="completion-toggle">
      <button
        onClick={() => {
          setTaskState(!taskState);
        }}
        className={`completion-toggle__toggle completion-toggle__toggle${
          taskState === true ? "--off" : "--on"
        }`}
      >
        <div className="completion-toggle__toggle__button"></div>
      </button>
      <div
        className={`completion-toggle__text completion-toggle__text${
          taskState ? "" : "--completed"
        }`}
      >
        {taskState ? "In progress" : "Completed"}
      </div>
    </div>
  );
};
