import React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { connect, MapDispatchToProps } from "react-redux";
import CollectionPage from "../CollectionPage";
import CollectionOverview from "../../components/CollectionOverview";
import { loadShopDataFromSnapshotToObj } from "$firebase/utils";
import { updateCollectionAction } from "$redux/shop/action";
import { ShopCategory } from "$redux/shop/reducer";

export interface ShopPageRouteParam {
  collectionId: string;
}

interface DispatchProps {
  updateCollectionAction: (collections: ShopCategory) => void;
}
type ShopPageProps = RouteComponentProps & DispatchProps;
class ShopPage extends React.Component<ShopPageProps> {
  async componentDidMount() {
    const shopCategory = await loadShopDataFromSnapshotToObj();
    console.log(shopCategory);
    this.props.updateCollectionAction(shopCategory as ShopCategory);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}>
          <CollectionOverview />
        </Route>
        <Route path={`${match.path}/:collectionId`}>
          <CollectionPage />
        </Route>
      </div>
    );
  }
}


const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
  updateCollectionAction: collections => dispatch(updateCollectionAction(collections))
});

// export default withRouter<
//   RouteComponentProps,
//   React.ComponentType<ShopPageProps>
// >(ShopPage);
export default withRouter<RouteComponentProps, React.ComponentType<RouteComponentProps>>(connect(null, mapDispatchToProps)(ShopPage));

