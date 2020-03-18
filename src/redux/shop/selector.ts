import { RootState } from "$redux";
import { createSelector } from "reselect";
import { ShopCategoryShape } from "./reducer";
import { DeepReadonly } from "utility-types";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(selectCollections, collections =>
    collections[collectionUrlParam]
  );
export type selectCollectionShape = DeepReadonly<ShopCategoryShape>;

export const selectCollectionForPreview = createSelector(
  selectCollections,
  collections => Object.keys(collections).map(key => collections[key])
);
export type selectCollectionForPreviewShape = DeepReadonly<ShopCategoryShape>[];
