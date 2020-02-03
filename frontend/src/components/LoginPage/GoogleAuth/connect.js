import { connect } from "react-redux";
import { fetchAuth } from "../../../store/state/userDetails";
import { signOut } from "../../../store/state/userDetails/actions";

import GoogleAuth from "./GoogleAuth";

const mapDispatchToProps = dispatch => ({
  fetchAuth: () => dispatch(fetchAuth()),
  signOut: () => dispatch(signOut())
});

const mapStateToProps = state => {
  return { userDetails: state.userDetails };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
