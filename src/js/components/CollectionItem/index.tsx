import React from "react";
import CustomButton from "../CustomButton";
import { connect, MapDispatchToProps } from "react-redux";
import { addItem } from "$redux/cart/action";
import "./index.scss";
import { Item } from "$redux/cart/reducer";

interface DispatchProps {
  addItem: (item: Item) => void;
}
interface OwnProps {
  item: Item;
}
export type CollectionItemProps = DispatchProps & OwnProps;
const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<
  DispatchProps,
  OwnProps
> = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
