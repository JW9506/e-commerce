import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../CollectionPage";
import CollectionOverview from "../../components/CollectionOverview";

export interface ShopPageRouteParam {
  collectionId: string;
}
const ShopPage: React.FC = () => {
  const M = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${M.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${M.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default ShopPage;
