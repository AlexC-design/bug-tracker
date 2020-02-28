import React from "react";

import "./css/create-task-button.css";

export const CreateTaskButton = () => {
  return (
    <div className="create-task-container">
      <button className={`create-button`}>
        <div className="create-button__plus create-button__plus--vertical" />
        <div className="create-button__plus create-button__plus--horizontal" />
      </button>
    </div>
  );
};
