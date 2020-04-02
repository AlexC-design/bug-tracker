import React from "react";

import "./css/completion-toggle.css";

export const CompletionToggle = ({ taskCompleted, setTaskCompleted }) => {
  return (
    <div className="completion-toggle">
      <button
        onClick={() => {
          setTaskCompleted();
        }}
        className={`completion-toggle__toggle completion-toggle__toggle${
          !taskCompleted === true ? "--off" : "--on"
        }`}
      >
        <div className="completion-toggle__toggle__button"></div>
      </button>
      <div
        className={`completion-toggle__text completion-toggle__text${
          !taskCompleted ? "" : "--completed"
        }`}
      >
        {!taskCompleted ? "In progress" : "Completed"}
      </div>
    </div>
  );
};
