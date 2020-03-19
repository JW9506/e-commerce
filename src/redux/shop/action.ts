import { ShopState, ShopCategory } from "./reducer";
import { firestore } from "$firebase/utils";
import { ThunkAction } from "redux-thunk";

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

export interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTIONS_START;
}
export interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTIONS_SUCCESS;
  payload: ShopState["collections"];
}
export interface FetchCollectionsFailure {
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
