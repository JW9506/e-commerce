import { ShopState, ShopCategory } from "./reducer";

const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

interface UpdateCollectionAction {
  type: typeof UPDATE_COLLECTIONS;
  payload: ShopState["collections"];
}

export type ShopAction = UpdateCollectionAction;

export const updateCollectionAction = (
  collections: ShopCategory
): ShopAction => ({
  type: "UPDATE_COLLECTIONS",
  payload: collections as any as ShopState["collections"]
});
