import React from "react";

import "./css/create-task-button.css";
import { withRouter } from "react-router";

const CreateTaskButton = ({ history }) => {
  const handleClick = () => {
    history.push(`/create-task`);
  };

  return (
    <div onClick={handleClick} className="create-task-container">
      <button className={`create-button`}>
        <div className="create-button__plus create-button__plus--vertical" />
        <div className="create-button__plus create-button__plus--horizontal" />
      </button>
    </div>
  );
};

export default withRouter(CreateTaskButton);
