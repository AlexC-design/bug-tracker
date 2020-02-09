import React, { Component } from "react";

import "./css/create-project-button.css";

export default class CreateProjectButton extends Component {
  constructor(props) {
    super(props);
  }

  createProject = () => {
    let projectName = prompt("enter name");
    alert(projectName);
  };

  render() {
    return (
      <div className="create-poject-container">
        <button className={`create-button`} onClick={this.createProject}>
          <div className="create-button__plus create-button__plus--vertical" />
          <div className="create-button__plus create-button__plus--horizontal" />
        </button>
      </div>
    );
  }
}
