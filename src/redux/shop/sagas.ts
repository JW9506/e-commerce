import { firestore } from "$firebase/utils";
import firebase from "firebase/app";
import { takeEvery, put } from "redux-saga/effects";
import {
  FETCH_COLLECTIONS_START,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./action";

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot: firebase.firestore.QuerySnapshot = yield collectionsRef.get();
    const transformedCollections = snapshot.docs.map(docSnapshot => {
      const { title, items } = docSnapshot.data() as {
        title: string;
        items: any[];
      };
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      };
    });
    const ret = transformedCollections.reduce((prev, c) => {
      prev[c.title] = c;
      return prev;
    }, {} as { [field: string]: any });
    yield put(fetchCollectionsSuccess(ret));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
