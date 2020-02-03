import { connect } from "react-redux";

import GuestLogin from "./GuestLogin";

const mapStateToProps = state => {
  return { userDetails: state.userDetails };
};

export default connect(mapStateToProps, null)(GuestLogin);
