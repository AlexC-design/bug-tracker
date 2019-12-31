import { all } from "redux-saga/effects";
import authSagas from "../state/userDetails/sagas";

export default function* rootSaga() {
  yield all([authSagas()]);
}
