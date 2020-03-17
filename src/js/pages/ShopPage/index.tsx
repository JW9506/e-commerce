import React from "react";
import CollectionPreview from "../../components/CollectionPreview";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ShopState } from "$redux/shop/reducer";
import { RootState } from "$redux";
import { selectCollections } from "$redux/shop/selector";

interface MapStateProps {
  collections: ShopState["collections"];
}
type ShopPageProps = MapStateProps;
const ShopPage: React.FC<ShopPageProps> = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
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

export default connect(mapStateToProps)(ShopPage);
