import { withRouter } from "react-router";
import { connect } from "react-redux";

import Navbar from "./Navbar";

const wrappedBar = withRouter(Navbar);

const mapStateToProps = state => ({
  projectName: state.selectedProject.projectName,
  projectId: state.selectedProject._id,
  userId: state.userDetails._id ? state.userDetails._id.toString() : "",
  projectMembers: state.selectedProject.projectMembers
});

export default connect(mapStateToProps, null)(wrappedBar);
