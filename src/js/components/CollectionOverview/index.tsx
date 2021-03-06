import React from "react";
import CollectionPreview from "../CollectionPreview";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { RootState } from "$redux";
import "./index.scss";
import { selectCollectionForPreview, selectCollectionForPreviewShape } from "$redux/shop/selector";

interface MapStateProps {
  collections: selectCollectionForPreviewShape;
}
type CollectionOverview = MapStateProps;
const CollectionOverview: React.FC<CollectionOverview> = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(c => (
        <CollectionPreview key={c.id} collection={c} />
      ))}
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  MapStateProps,
  {},
  RootState
> = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
