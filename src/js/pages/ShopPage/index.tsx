import React from "react";
import CollectionPreview from "../../components/CollectionPreview";
import shopData from "../../../data/shopData";

interface ShopPageState {
  collections: typeof shopData;
}
class ShopPage extends React.Component<{}, ShopPageState> {
  state: ShopPageState = {
    collections: shopData
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
