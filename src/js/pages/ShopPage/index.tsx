import React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import CollectionPage from "../CollectionPage";
import CollectionOverview from "../../components/CollectionOverview";
import {
  fetchCollectionsStartAsync,
  ShopAction
} from "$redux/shop/action";
import { selectIsCollectionFetching } from "$redux/shop/selector";
import { createStructuredSelector } from "reselect";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "$redux";
import WithSpinner from "../../components/WithSpinner";
const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollectionpage = WithSpinner(CollectionPage);

export interface ShopPageRouteParam {
  collectionId: string;
}

interface MapStateProps {
  isCollectionFetching: boolean;
}
interface MapDispatchProps {
  fetchCollectionsStartAsync: () => void;
}
type ShopPageProps = RouteComponentProps & MapDispatchProps & MapStateProps;
class ShopPage extends React.Component<ShopPageProps> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}>
          <WithSpinnerCollectionOverview isLoading={isCollectionFetching} />
        </Route>
        <Route path={`${match.path}/:collectionId`}>
          <WithSpinnerCollectionpage isLoading={isCollectionFetching} />
        </Route>
      </div>
    );
  }
}

const MapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps: MapDispatchToProps<MapDispatchProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ShopAction>
) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default withRouter<
  RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(connect(MapStateToProps, mapDispatchToProps)(ShopPage));
