import { takeLatest, all } from "redux-saga/effects";

import { LOGIN, LOGOUT } from "../Actions/Auth";
import { login,logout } from "../../Services/Auth";


function* watchAuth() {
  yield all([takeLatest(LOGIN, login)]);
}

export default watchAuth;