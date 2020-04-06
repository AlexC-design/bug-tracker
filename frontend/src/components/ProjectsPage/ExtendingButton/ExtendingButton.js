import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../../store/state/projects/index";
import { addUserToProject } from "../../../store/state/selectedProject/index";

import "./css/extending-button.css";

const ExtendingButton = ({
  buttonType,
  userId,
  projectId,
  createProject,
  addUserToProject
}) => {
  const createNew = () => {
    let input = "";

    switch (buttonType) {
      case "createProject":
        input = prompt("enter project name");
        createProject({ projectName: input, userId });
        break;
      case "addUser":
        input = prompt("enter user email");
        addUserToProject(input, projectId);
        break;
      default:
        alert(
          `${
            buttonType ? `no case for ${buttonType}` : "no buttonType specified"
          }`
        );
    }
  };

  return (
    <div className="extending-button-container">
      <button className="extending-button" onClick={createNew}>
        <div className="extending-button__plus extending-button__plus--vertical" />
        <div className="extending-button__plus extending-button__plus--horizontal" />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.userDetails._id,
  projectId: state.selectedProject._id
});

export default connect(mapStateToProps, { createProject, addUserToProject })(
  ExtendingButton
);
