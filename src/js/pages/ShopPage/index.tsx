import React, { useEffect } from "react";
import {
  Route,
  useRouteMatch
} from "react-router-dom";
import { connect, MapDispatchToProps } from "react-redux";
import { fetchCollectionsStart } from "$redux/shop/action";
import CollectionOverviewSpinnerContainer from "../../components/CollectionOverview/CollectionOverviewSpinnerContainer";
import CollectionPageSpinnerContainer from "../CollectionPage/CollectionPageSpinnerContainer";

export interface ShopPageRouteParam {
  collectionId: string;
}

interface MapDispatchProps {
  fetchCollectionsStartAsync: () => void;
}
type ShopPageProps = MapDispatchProps;
const ShopPage: React.FC<ShopPageProps> = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);
  const M = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${M.path}`}>
        <CollectionOverviewSpinnerContainer />
      </Route>
      <Route path={`${M.path}/:collectionId`}>
        <CollectionPageSpinnerContainer />
      </Route>
    </div>
  );
};
const mapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default (connect(null, mapDispatchToProps)(ShopPage));
