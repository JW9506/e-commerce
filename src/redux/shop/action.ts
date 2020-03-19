import { ShopState, ShopCategory } from "./reducer";
import { firestore } from "$firebase/utils";
import { ThunkAction } from "redux-thunk";

const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START;
}
interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: ShopState["collections"];
}
interface FetchCollectionsFailure {
  type: typeof FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export type ShopAction =
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsFailure;

export const fetchCollectionsStart = (): ShopAction => ({
  type: "FETCH_COLLECTIONS_START"
});

export const fetchCollectionsSuccess = (
  collections: ShopCategory
): ShopAction => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: (collections as any) as ShopState["collections"]
});

export const fetchCollectionsFailure = (errorMsg: string): ShopAction => ({
  type: "FETCH_COLLECTIONS_FAILURE",
  payload: errorMsg
});

export const fetchCollectionsStartAsync = (): ThunkAction<
  void,
  {},
  {},
  ShopAction
> => dispatch => {
  const collectionsRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());
  collectionsRef
    .get()
    .then(snapshot => {
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
      dispatch(fetchCollectionsSuccess(ret));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
};
