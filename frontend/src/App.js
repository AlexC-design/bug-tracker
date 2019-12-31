import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import LoginPage from "./components/LoginPage/LoginPage";
import config from "./store/configureStore";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={config.store}>
        <ConnectedRouter history={config.history}>
          <LoginPage />
        </ConnectedRouter>
      </Provider>
    );
  }
}
