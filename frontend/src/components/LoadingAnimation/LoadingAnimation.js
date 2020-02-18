import React, { Component } from "react";

import "./css/loading-animation.css";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-animation">
        <div className="loading-animation__loading-text">Loading...</div>
        <div className="loading-animation__loading-dot" />
      </div>
    );
  }
}
