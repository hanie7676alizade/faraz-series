import { takeEvery } from "redux-saga/effects";
import * as sagas from "./sagas";

export function* watchSerial() {
  yield takeEvery("serial/getData", sagas.fetchSerialSaga);
}
