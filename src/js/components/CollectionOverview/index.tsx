import React from "react";
import CollectionPreview from "../CollectionPreview";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { RootState } from "$redux";
import "./index.scss";
import { selectCollections } from "$redux/shop/selector";

interface MapStateProps {
  collections: RootState["shop"]["collections"];
}
type CollectionOverview = MapStateProps;
const CollectionOverview: React.FC<CollectionOverview> = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
