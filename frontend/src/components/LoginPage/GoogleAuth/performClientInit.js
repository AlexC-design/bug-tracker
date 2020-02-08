import { connect } from "react-redux";
// import { getUserDetails } from "../../../store/state/userDetails/sagas";
import { getUserDetails } from "../../../store/state/userDetails/index";

export const performClientInit = dispatch => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId:
          "29791915032-i3nlh62ukf6f5bp1aom5ko8iaq1be011.apps.googleusercontent.com",
        scope: "email profile"
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        auth.isSignedIn.get() && dispatch(getUserDetails(auth));
      });
  });
};
