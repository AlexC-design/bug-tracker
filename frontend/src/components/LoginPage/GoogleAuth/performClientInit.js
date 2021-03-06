import { key, nowKey } from "../../../config/key";
import { getUserDetails } from "../../../store/state/userDetails/index";

export const performClientInit = dispatch => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId: nowKey,
        scope: "email profile"
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();

        auth.isSignedIn.get() && dispatch(getUserDetails(auth));
      });
  });
};
