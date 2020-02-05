import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { store } from "./store/configureStore";

import LoginPage from "./components/LoginPage/LoginPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter basename="/">
          <Route path="/" exact component={LoginPage} />
          <Route path="/projects" exact component={ProjectsPage} />
        </HashRouter>
      </Provider>
    );
  }
}
