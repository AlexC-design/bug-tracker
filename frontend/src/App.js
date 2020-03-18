import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import { store, persistor } from "./store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import CreateTaskPage from "./components/CreateTaskPage/CreateTaskPage";
import MembersPage from "./components/MembersPage/MembersPage";
import { ViewTaskPage } from "./components/ViewTaskPage/ViewTaskPage";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter basename="/">
            <Navbar />
            <Route path="/" exact component={LoginPage} />
            <Route path="/projects" exact component={ProjectsPage} />
            <Route path="/project/:id" exact component={ProjectPage} />
            <Route
              path="/project/:id/create-task"
              exact
              component={CreateTaskPage}
            />
            <Route path="/project/:id/members" exact component={MembersPage} />
            <Route path="/project/:id/task:id" exact component={ViewTaskPage} />
            <div className="app-background" />
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}
