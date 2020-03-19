import React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
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
type ShopPageProps = RouteComponentProps & MapDispatchProps;
class ShopPage extends React.Component<ShopPageProps> {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}>
          <CollectionOverviewSpinnerContainer />
        </Route>
        <Route path={`${match.path}/:collectionId`}>
          <CollectionPageSpinnerContainer />
        </Route>
      </div>
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<
  MapDispatchProps,
  {}
> = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart())
});

export default withRouter<
  RouteComponentProps,
  React.ComponentType<RouteComponentProps>
>(connect(null, mapDispatchToProps)(ShopPage));
