// import { put } from "redux-saga/effects";

// import axios from "../../axiosInstance";

// eslint-disable-next-line require-yield
export function* fetchSerialSaga() {
  // yield put(setLoading(true));
  try {
    // const response = yield axios.get(`/v2/someURL/`);
  } catch (err) {
    console.error("sagaERR fetchSerialSaga", err);
  } finally {
    // yield put(setLoading(false));
  }
}
