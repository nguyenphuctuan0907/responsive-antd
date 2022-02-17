import { fork } from "redux-saga/effects";
import getAllPost from "./getAllPost";

function* rootSaga() {
  yield fork(getAllPost);
}

export default rootSaga;
