import React from "react";

export const CompletionToggle = ({ taskState }) => {
  return (
    <div className="completion-toggle">
      <button
        className={`completion-toggle__toggle completion-toggle__toggle${
          taskState ? "--off" : "--on"
        }`}
      >
        <div className="completion-toggle__toggle__button"></div>
      </button>
      <div className="completion-toggle__text">
        {taskState ? "In progress" : "Completed"}
      </div>
    </div>
  );
};
