import { connect } from "react-redux";
import { signIn, signOut } from "../../../store/state/userDetails";
import { performClientInit } from "../../../components/LoginPage/GoogleAuth/performClientInit";

import GoogleAuth from "./GoogleAuth";

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signIn()),
  signOut: () => dispatch(signOut()),
  performClientInit: () => performClientInit(dispatch)
});

const mapStateToProps = state => ({ userDetails: state.userDetails });

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
