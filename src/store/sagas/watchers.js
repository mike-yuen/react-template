import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./sagaAuth";

import types from "../actions/types";

export default function* watchUserAuthentication() {
  // yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}
