import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { store } from "./store/configureStore";

import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import CreateTaskPage from "./components/CreateTaskPage/CreateTaskPage";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter basename="/">
          <Navbar />
          <Route path="/" exact component={LoginPage} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/project/:id" exact component={ProjectPage} />
          <Route path="/create-task" exact component={CreateTaskPage} />
          <div className="app-background" />
        </HashRouter>
      </Provider>
    );
  }
}
