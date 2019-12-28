import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "29791915032-i3nlh62ukf6f5bp1aom5ko8iaq1be011.apps.googleusercontent.com",
          scope: "email profile"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  render() {
    return (
      <div>
        <div>Google Auth</div>
      </div>
    );
  }
}
