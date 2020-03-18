import React from "react";
import CollectionItem from "../../components/CollectionItem";
import { connect, MapStateToProps } from "react-redux";
import { selectCollection, selectCollectionShape } from "$redux/shop/selector";
import { useRouteMatch } from "react-router-dom";
import { ShopPageRouteParam } from "../ShopPage";
import { RootState } from "$redux";
import "./index.scss";

interface MapStateProps {
  getCollection: (
    collectionUrlParam: string
  ) => selectCollectionShape;
}
type CollectionPageProps = MapStateProps;
const CollectionPage: React.FC<CollectionPageProps> = ({ getCollection }) => {
  const M = useRouteMatch<ShopPageRouteParam>();
  const collection = getCollection(M.params.collectionId);
  return (
    <div className="collection-page">
      <h2 className="title">{M.params.collectionId}</h2>
      <div className="items">
        {collection &&
          collection.items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = state => ({
  getCollection: (collectionUrlParam: string) =>
    selectCollection(collectionUrlParam)(state)
});

export default connect(mapStateToProps)(CollectionPage);
