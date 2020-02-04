import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/LoginPage";
import { store } from "./store/configureStore";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter basename="/">
          <Route to="/" exact component={LoginPage} />
        </HashRouter>
      </Provider>
    );
  }
}
