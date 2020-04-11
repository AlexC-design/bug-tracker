import { key } from "../../../config/key";
import { getUserDetails } from "../../../store/state/userDetails/index";

export const performClientInit = dispatch => {
  window.gapi.load("client:auth2", () => {
    window.gapi.client
      .init({
        clientId: key,
        scope: "email profile"
      })
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        console.log(auth)
        auth.isSignedIn.get() && dispatch(getUserDetails(auth));
      });
  });
};
