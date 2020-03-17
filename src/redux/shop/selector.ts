import { RootState } from "$redux";
import { createSelector } from "reselect";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(selectCollections, collections =>
    collections[collectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  selectCollections,
  collections => Object.keys(collections).map(key => collections[key])
);
