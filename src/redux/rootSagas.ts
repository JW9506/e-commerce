import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/sagas";

export default function* () {
  // enables concurrency
  yield all([
    call(fetchCollectionsStart)
  ]);
}
