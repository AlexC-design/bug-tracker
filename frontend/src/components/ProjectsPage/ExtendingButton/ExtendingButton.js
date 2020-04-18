import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { createProject } from "../../../store/state/projects/index";
import { addUserToProject } from "../../../store/state/selectedProject/index";
import { DeleteButton } from "../../DeleteButton/DeleteButton";

import "./css/extending-button.css";

const ExtendingButton = ({
  buttonType,
  userId,
  projectId,
  createProject,
  addUserToProject
}) => {
  const [buttonState, setButtonState] = useState("--contracted");
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const toggle = () => {
    if (buttonState === "--contracted") {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
      setInputValue("");
    }
    setButtonState(
      buttonState === "--contracted" ? "--expanded" : "--contracted"
    );
  };

  const keyPressed = e => {
    if (e.key === "Enter") {
      createNew();
    }
  };

  const createNew = () => {
    switch (buttonType) {
      case "createProject":
        createProject({ projectName: inputValue, userId });
        toggle();
        break;
      case "addUser":
        addUserToProject(inputValue, projectId);
        toggle();
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
    <div
      className={`extending-button-container extending-button-container${buttonState}`}
    >
      <button
        className="extending-button"
        onClick={buttonState === "--expanded" ? createNew : toggle}
      >
        <div className="plus-container">
          <div className="extending-button__plus extending-button__plus--vertical" />
          <div className="extending-button__plus extending-button__plus--horizontal" />
        </div>
      </button>
      <input
        name="buttonInput"
        type="text"
        placeholder={
          buttonType === "addUser" ? "Enter email" : "Enter project name"
        }
        onKeyPress={keyPressed}
        autoComplete="off"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
      />
      <DeleteButton clickEvent={toggle} />
    </div>
  );
};

const mapStateToProps = state => ({
  userId: state.userDetails._id,
  projectId: state.selectedProject._id
});

export default connect(mapStateToProps, {
  createProject,
  addUserToProject
})(ExtendingButton);
