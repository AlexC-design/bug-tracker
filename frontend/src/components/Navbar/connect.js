import { withRouter } from "react-router";
import { connect } from "react-redux";

import Navbar from "./Navbar";

const wrappedBar = withRouter(Navbar);

const mapStateToProps = state => ({
  projectName: state.selectedProject.project_name
});

export default connect(mapStateToProps, null)(wrappedBar);
