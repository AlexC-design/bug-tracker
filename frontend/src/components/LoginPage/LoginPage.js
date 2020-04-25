import React, { Component } from "react";
import { clearProjects } from "../../store/state/projects/index";
import { clearUsers } from "../../store/state/users/index";
import Logo from "./Logo";
import GuestLogin from "./GuestLogin";
import GoogleAuth from "./GoogleAuth";
import "./css/login-page.css";
import { connect } from "react-redux";
// import { DeleteAllUsers } from "./DeleteAllUsers/DeleteAllUsers";
import { DeleteAllGuests } from "./DeleteAllUsers/DeleteAllGuests";
import { DeleteAllProjects } from "./DeleteAllUsers/DeleteAllProjects";

class LoginPage extends Component {
  componentDidMount() {
    this.props.clearUsers();
    this.props.clearProjects();
  }

  render() {
    return (
      <div
        className={`login-page-container login-page-container${
          this.props.userDetailsLoading ? "--loading" : "--not-loading"
        }`}
      >
        <Logo />
        <GuestLogin />
        <p>or</p>
        <GoogleAuth />
        {/* <DeleteAllUsers /> */}
        {/* <DeleteAllGuests /> */}
        {/* <DeleteAllProjects /> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetailsLoading: state.userDetails.userDetailsLoading
});

export default connect(mapStateToProps, { clearProjects, clearUsers })(
  LoginPage
);
