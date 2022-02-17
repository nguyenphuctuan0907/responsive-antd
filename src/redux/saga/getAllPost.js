import { getListPostData } from "../../apis/postsAPI";
import { call, put, take } from "redux-saga/effects";
import { getListPostSuccess } from "../actions";
import { GET_LIST_POST_SUCCESS } from "../../../src/constants";

function* getListPostSaga() {
  try {
    yield take(GET_LIST_POST_SUCCESS);
    const data = yield call(getListPostData);
    yield put(getListPostSuccess(data.data));
  } catch (error) {
    //handle error
    console.log("error getListPostSaga:::", error);
  }
}

export default getListPostSaga;
