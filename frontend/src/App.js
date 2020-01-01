import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import LoginPage from "./components/LoginPage/LoginPage";
import { store, history } from "./store/configureStore";

import "./css/app.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <LoginPage />
        </ConnectedRouter>
      </Provider>
    );
  }
}
