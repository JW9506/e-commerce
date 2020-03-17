import { RootState } from "$redux";
import { createSelector } from "reselect";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(selectCollections, collections =>
    collections.find(c => c.title === collectionUrlParam)
  );
