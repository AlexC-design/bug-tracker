import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    const { fetchAuth } = this.props;
    fetchAuth();
  }

  render() {
    return (
      <div>
        <div>Google Auth</div>
      </div>
    );
  }
}
