import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}
